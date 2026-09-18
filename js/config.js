export const APP = Object.freeze({
  version: '4.2.0-SIMPLIFICADA',
  endpoint: 'https://script.google.com/macros/s/AKfycbwJJH5Vbtb0TpBtsn2YDfRMwHeQo1bLfpowV5W5JXMvfcN0Vdk7uyjjh4bipGcBf-9F/exec',
  analysisStartDate: '2026-09-18',
  inventoryFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfAwS2r1v6nJc-xaCVKaWiXKIs9UrM-fBEDTBZXVatoruXsbQ/viewform?usp=header',
  inventorySheetUrl: 'https://docs.google.com/spreadsheets/d/1mIPD1vVouZdxKjouQYwKbBeRUVBgdrDTFOsGvJGvDw0/edit?resourcekey=&gid=1613282144#gid=1613282144',
  vendorEmail: 'distribuicao.vitoria@ibg.com.br',
  monitoredMailbox: 'gasesmedicinais.sesa@serra.es.gov.br'
});
export function loadConnection(){return{endpoint:APP.endpoint}}
export function clearSession(){sessionStorage.removeItem('gases_v4_token')}
export function getSession(){return sessionStorage.getItem('gases_v4_token')||''}
export function setSession(token){sessionStorage.setItem('gases_v4_token',token)}
