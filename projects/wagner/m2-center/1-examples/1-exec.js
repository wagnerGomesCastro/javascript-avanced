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
const { rangeDates } = require('./functions/array-dates/1-examp'); 
const { avalGeneral } = require('./data/arrayAvalGeneral'); 
const moment = require('moment');
 
moment.locale('pt-br');

var arrayOtimo = []; 
var arrayBom = []; 
var arrayRegular = []; 
var arrayRuim = []; 
 
let unirArrays = []; 
 
 
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

unirArrays.push(arrayOtimo); 
unirArrays.push(arrayBom); 
unirArrays.push(arrayRegular); 
unirArrays.push(arrayRuim); 
 
// Array.prototype.push.apply(arrayOtimo, unirArrays); 
 
 
const array1 = [ 
    { "otimo": 4, "data": "2021-05-20"}, 
    { "otimo": 5, "data": "2021-05-21"} 
] 
 
const array2 = [ 
    { "bom": 4, "data": "2021-05-20"}, 
    { "bom": 5, "data": "2021-05-21"} 
] 
 
 
const array3 = [ 
    { "regular": 4, "data": "2021-05-20"}, 
    { "regular": 5, "data": "2021-05-21"} 
] 
 
const array4 = [ 
    { "ruim": 4, "data": "2021-05-20"}, 
    { "ruim": 5, "data": "2021-05-21"} 
] 
 

let arrayGrafico = [];

for (let i = 0; i < rangeDates.length; i++) {
  const dataIndex = rangeDates[i];
  //console.log(index)

  if (arrayOtimo[i] && arrayOtimo[i].data !== undefined ) {
    arrayGrafico[i] = {
      data: arrayOtimo[i].data,
      otimo: arrayOtimo[i].otimo,
      bom: 0,
      regular: 0,
      ruim: 0,
    }
  }
}


for (let i = 0; i < rangeDates.length; i++) {
  const dataIndex = rangeDates[i];

  if (arrayBom[i] && arrayBom[i].data !== undefined ) {
    if (arrayGrafico[i] && arrayGrafico[i].data !== undefined) {
      if (arrayGrafico[i].data == arrayBom[i].data) {
        arrayGrafico[i].bom = arrayBom[i].bom;
      } else {
        arrayGrafico.push({
          data: arrayBom[i].data,
          otimo: 0,
          bom: arrayBom[i].bom,
          regular: 0,
          ruim: 0,
        });
      }
    }
  }
}

// for (let i = 0; i < rangeDates.length; i++) {
//   const dataIndex = rangeDates[i];

//   if (arrayRegular[i] && arrayRegular[i].data !== undefined ) {
//     if (arrayGrafico[i] && arrayGrafico[i].data !== undefined) {
//       if (arrayGrafico[i].data === arrayRegular[i].data) {
//         arrayGrafico[i].regular = arrayRegular[i].regular;
//         // console.log('entrei', arrayRegular[i].data)
//       } else {

//         if (!arrayGrafico.indexOf(arrayRegular[i].data) ) {
//           arrayGrafico.push({
//             data: arrayRegular[i].data,
//             otimo: 0,
//             bom: 0,
//             regular: arrayRegular[i].regular,
//             ruim: 0,
//           });
//         }
//       }
//     }
//   }
// }



// for (let i = 0; i < rangeDates.length; i++) {
//   const dataIndex = rangeDates[i];
//   if (arrayRuim[i] && arrayRuim[i].data !== undefined ) {
//     if (arrayGrafico[i] && arrayGrafico[i].data !== undefined) {
//       if (arrayGrafico[i].data == arrayRuim[i].data) {
//         arrayGrafico[i].ruim = arrayRuim[i].ruim;
//       } else {
//         arrayGrafico.push({
//           data: arrayRuim[i].data,
//           otimo: 0,
//           bom: 0,
//           regular: 0,
//           ruim: arrayRuim[i].ruim
//         })
//       }
//     }
//   } 
// }




// if (!arrayGrafico.indexOf(arrayRegular[i].data) ) {
//   arrayGrafico.push({
//     data: arrayRegular[i].data,
//     otimo: 0,
//     bom: 0,
//     regular: arrayRegular[i].regular,
//     ruim: 0,
//   });
// }

for (let i = 0; i < rangeDates.length; i++) {
  console.log(i);

  if (arrayGrafico[i]) {
    if (arrayRegular[i]) {
      if (arrayRegular[i].data == arrayGrafico[i].data) {
        arrayGrafico[i].regular = arrayRegular[i].regular
      } else {
      }
    }
  }
};


for (let i = 0; i < rangeDates.length; i++) {

  if (arrayRegular[i]) {
    let index = arrayGrafico.findIndex(x => x.data === arrayRegular[i].data);

    if (index >= 0 ) {
      console.log('tem')
    }

    if (index == -1) {
      console.log('não tem')
      arrayGrafico[i].data = arrayRegular[i].data;
      arrayGrafico[i].otimo = 0;
      arrayGrafico[i].bom = 0;
      arrayGrafico[i].regular = arrayRegular[i].regular;
      arrayGrafico[i].ruim = 0;

      console.log(arrayGrafico)
    }

  }
}




// arrayGrafico.push({
//   data: arrayRegular[i].data,
//   otimo: 0,
//   bom: 0,
//   regular: arrayRegular[i].regular,
//   ruim: 0
// })




// let newRegular = [];

// for (let i = 0; i < rangeDates.length; i++) {
//    const dataIndex = rangeDates[i];
//   //console.log(rangeDates[i]);

//   if (arrayRegular[i]) {

//     // if (arrayGrafico.indexOf(arrayRegular[i].data)) {
//     //   //console.log(arrayRegular[i].data)
//     //   //console.log(arrayGrafico[i].data)
//     //   //arrayGrafico[i].regular = arrayRegular[i].regular;
//     //   arrayGrafico.forEach(element => {
//     //     //console.log(element.data == arrayRegular[i].data);
//     //     if ((element.data == arrayRegular[i].data)) {
//     //       return element.regular = arrayRegular[i].regular
//     //     } 
//     //   });
//     // }

//     if (!arrayGrafico.includes(arrayRegular[i].data) ) {
//       newRegular.push({
//         data: arrayRegular[i].data,
//         otimo: 0,
//         bom: 0,
//         regular: arrayRegular[i].regular,
//         ruim: 0,
//       });
//     } 



//   }
  
// };




// arrayGrafico.push(newRegular); 

  
//console.log(arrayRegular)
// console.log( newRegular )
//console.log( newRegular )
//console.log(arrayRegular)
console.log(arrayGrafico)


