import { loadConnection, getSession } from './config.js';

async function parseResponse(response){
  const text=await response.text();
  try{return JSON.parse(text)}
  catch{throw new Error('O Apps Script não respondeu corretamente. Verifique a implantação do Web App.')}
}
function endpoint(){
  const c=loadConnection();
  if(!c.endpoint) throw new Error('Endpoint do Apps Script não configurado.');
  return c.endpoint;
}
export async function apiGet(action,params={}){
  const url=new URL(endpoint());
  url.searchParams.set('action',action);
  const token=getSession();
  if(token) url.searchParams.set('token',token);
  Object.entries(params).forEach(([k,v])=>v!==undefined&&v!==null&&url.searchParams.set(k,String(v)));
  const data=await parseResponse(await fetch(url));
  if(!data.ok) throw new Error(data.error||'Falha na integração.');
  return data;
}
export async function apiPost(action,payload={}){
  const response=await fetch(endpoint(),{
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({action,token:getSession(),...payload})
  });
  const data=await parseResponse(response);
  if(!data.ok) throw new Error(data.error||'Falha na integração.');
  return data;
}
export async function login(username,password){
  const response=await fetch(endpoint(),{
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({action:'login',username,password})
  });
  const data=await parseResponse(response);
  if(!data.ok) throw new Error(data.error||'Login inválido.');
  return data;
}
