export const APP = Object.freeze({
  version: '4.0.0',
  analysisStartDate: '2026-09-18',
  inventoryFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfAwS2r1v6nJc-xaCVKaWiXKIs9UrM-fBEDTBZXVatoruXsbQ/viewform?usp=header',
  inventorySheetUrl: 'https://docs.google.com/spreadsheets/d/1mIPD1vVouZdxKjouQYwKbBeRUVBgdrDTFOsGvJGvDw0/edit?resourcekey=&gid=1613282144#gid=1613282144',
  vendorEmail: 'distribuicao.vitoria@ibg.com.br',
  monitoredMailbox: 'gasesmedicinais.sesa@serra.es.gov.br'
});
export function loadConnection(){return{endpoint:localStorage.getItem('gases_v4_endpoint')||'',key:localStorage.getItem('gases_v4_key')||''}}
export function saveConnection(endpoint,key){localStorage.setItem('gases_v4_endpoint',endpoint.trim());localStorage.setItem('gases_v4_key',key.trim())}
export function clearSession(){sessionStorage.removeItem('gases_v4_token')}
export function getSession(){return sessionStorage.getItem('gases_v4_token')||''}
export function setSession(token){sessionStorage.setItem('gases_v4_token',token)}
