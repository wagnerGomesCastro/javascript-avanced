/** 
  data = [ 
    { 
      name: '2021-05-21', 
      Ótimo: 3432, 
      Bom: 2342, 
      Regular: 1842, 
      Ruim: 4242, 
    } 
  ] 
 */ 
 
/* eslint-disable */  
require('./functions/index'); 
require('moment/locale/pt-br');
const { log }  = require('./functions/helpers')
const { rangeDatesObject, rangeDates } = require('./functions/array-dates/1-examp'); 
const { avalGeneral } = require('./data/arrayAvalGeneral'); 
const moment = require('moment');
 
moment.locale('pt-br');

var arrayOtimo = []; 
var arrayBom = []; 
var arrayRegular = []; 
var arrayRuim = []; 
 
avalGeneral.filter((item) => { 
    if (item.avaliacao == "otimo") { 
        arrayOtimo.push({ 
            otimo: item.qtd, 
            data: item.data 
        }) 
    } 
 
    if (item.avaliacao == "bom") { 
        arrayBom.push({ 
            bom: item.qtd, 
            data: item.data 
        }) 
    } 
 
    if (item.avaliacao == "regular") { 
        arrayRegular.push({ 
            regular: item.qtd, 
            data: item.data 
        }) 
    } 
 
    if (item.avaliacao == "ruim") { 
        arrayRuim.push({ 
            ruim: item.qtd, 
            data: item.data 
        }) 
    } 
}); 


let arrayGrafico = [];

rangeDatesObject.forEach((element, i) => {
  arrayOtimo.forEach((el, j) => {
    if ((element.data == arrayOtimo[j].data)) {
      //return element.otimo = arrayOtimo[i].otimo
      rangeDatesObject[i].otimo = arrayOtimo[j].otimo
      //console.log(el.data)
    } 
  });
});

rangeDatesObject.forEach((element, i) => {
  arrayBom.forEach((el, j) => {
    if ((element.data == arrayBom[j].data)) {
      //return element.otimo = arrayOtimo[i].otimo
      rangeDatesObject[i].bom = arrayBom[j].bom
      //console.log(el.data)
    } 
  });
});

rangeDatesObject.forEach((element, i) => {
  arrayRegular.forEach((el, j) => {
    if ((element.data == arrayRegular[j].data)) {
      //return element.otimo = arrayOtimo[i].otimo
      rangeDatesObject[i].regular = arrayRegular[j].regular
      //console.log(el.data)
    } 
  });
});

rangeDatesObject.forEach((element, i) => {
  arrayRuim.forEach((el, j) => {
    if ((element.data == arrayRuim[j].data)) {
      //return element.otimo = arrayOtimo[i].otimo
      rangeDatesObject[i].ruim = arrayRuim[j].ruim
      //console.log(el.data)
    } 
  });
});


let excludesIndices = [];

excludesIndices = rangeDatesObject.filter((item, i) => {
  return (item.otimo >= 0 && item.bom == 0 && item.regular == 0 && item.ruim == 0)
});

excludesIndices.forEach(element => {
  rangeDatesObject.remove(element);
});


 console.log(rangeDatesObject)


