/** By Sophie: pegar en Apps Script vinculado a la hoja, desplegar como Web App. */
const HEADERS = ['fecha','tipo','datos_json'];
function doPost(e){
 try {
  const p=JSON.parse(e.postData.contents);
  if(!p || p.website || !['cuantitativo','cualitativo'].includes(p.tipo) || !p.respuestas || typeof p.respuestas!=='object') throw Error('invalid');
  const lock=LockService.getScriptLock();lock.waitLock(10000);
  try{
   const book=SpreadsheetApp.getActiveSpreadsheet();
   const tab=p.tipo==='cuantitativo'?'Cuantitativo':'Cualitativo';
   const sheet=book.getSheetByName(tab)||book.insertSheet(tab);
   const keys=Object.keys(p.respuestas).filter(k=>/^[a-z0-9_]+$/.test(k)).slice(0,60);
   if(sheet.getLastRow()===0)sheet.appendRow(['Fecha de registro',...keys]);
   const headers=sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
   const newKeys=keys.filter(k=>!headers.includes(k));
   if(newKeys.length){sheet.getRange(1,headers.length+1,1,newKeys.length).setValues([newKeys]);headers.push(...newKeys)}
   const safe=v=>{let s=String(v??'').slice(0,3000);return /^[=+\-@\t\r]/.test(s)?"'"+s:s};
   sheet.appendRow([new Date(),...headers.slice(1).map(k=>safe(p.respuestas[k]))]);
  }finally{lock.releaseLock()}
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
 }catch(err){return ContentService.createTextOutput(JSON.stringify({ok:false})).setMimeType(ContentService.MimeType.JSON)}
}
