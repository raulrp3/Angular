import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = {"total_rows":6302,"offset":0,"rows":[
    {"id":"producto-0000000090100","key":"producto-0000000090100","value":{"_id":"producto-0000000090100","_rev":"2-024547d9efe755e7c9cb3d7298bb7e0f","uuid":"producto-0000000090100","marca":"SCHNEIDER","nombre":"Cerveza Botella Schneider x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000000135559","key":"producto-0000000135559","value":{"_id":"producto-0000000135559","_rev":"1-9526b0c155107518166a86592884ac4f","nombre":"REJILLA COMPACTA COL","uuid":"producto-0000000135559","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000136204","key":"producto-0000000136204","value":{"_id":"producto-0000000136204","_rev":"1-01b52fe46799632a97c20148e4844861","nombre":"REJ.SECAVAJ.43X55CM","uuid":"producto-0000000136204","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000144278","key":"producto-0000000144278","value":{"_id":"producto-0000000144278","_rev":"1-93172ef9ff02582aa25ce2b3d90dc3f2","nombre":"REJILLA AUTO 50X50CM","uuid":"producto-0000000144278","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000498104","key":"producto-0000000498104","value":{"_id":"producto-0000000498104","_rev":"1-42c57af221c3c2022f5d9eef8ee7556c","nombre":"LECHE L.V.ENTERA","uuid":"producto-0000000498104","marca":"SIN MARCA","presentacion":"1.0 lt"}},
    {"id":"producto-0000000865463","key":"producto-0000000865463","value":{"_id":"producto-0000000865463","_rev":"2-829f9a220279ff6ef4487ff56d7b1a5b","uuid":"producto-0000000865463","marca":"SIN MARCA","nombre":"Trapo Piso Blanco Consorcio x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000000865470","key":"producto-0000000865470","value":{"_id":"producto-0000000865470","_rev":"2-d72b8db68dc68ae042ad082a762449d0","uuid":"producto-0000000865470","marca":"SIN MARCA","nombre":"Trapo Piso Gris Consorcio x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000001034448","key":"producto-0000001034448","value":{"_id":"producto-0000001034448","_rev":"2-4c4fc9c5eacd072f8f8374cf70ca13b2","uuid":"producto-0000001034448","marca":"SIN MARCA","nombre":"Trapo Piso Mil Usos x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000001121100","key":"producto-0000001121100","value":{"_id":"producto-0000001121100","_rev":"1-eadf48a159d1feb4b25375254818736d","nombre":"PAÃ‘O FRANELA CALIDAD","uuid":"producto-0000001121100","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000007048012","key":"producto-0000007048012","value":{"_id":"producto-0000007048012","_rev":"2-6b908743394c7396e1d7ffd2dffb9a3e","uuid":"producto-0000007048012","marca":"SALTA","nombre":"Cerveza Blanca Botella Salta x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000007048029","key":"producto-0000007048029","value":{"_id":"producto-0000007048029","_rev":"1-6e6336a2dc1ddff0afa99d1a3d228d10","nombre":"ESQUELETO CERV BLANC","uuid":"producto-0000007048029","marca":"SALTA","presentacion":"1.0 ud"}},
    {"id":"producto-0000007048036","key":"producto-0000007048036","value":{"_id":"producto-0000007048036","_rev":"2-31769500d5e5da5b8d82627a3e5c9501","uuid":"producto-0000007048036","marca":"SALTA","nombre":"Cerveza Negra Botella Salta x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000007048043","key":"producto-0000007048043","value":{"_id":"producto-0000007048043","_rev":"1-3b5c686fcf957cb7f51a3ba005eb5d49","nombre":"ESQUELETO CERV NEGRA","uuid":"producto-0000007048043","marca":"SALTA","presentacion":"1.0 ud"}}]};
    
  constructor() { }
}
