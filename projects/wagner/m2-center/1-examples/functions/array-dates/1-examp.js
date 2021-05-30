/* eslint-disable */ 

// https://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates

require('twix');
const moment = require('moment');

var itr = moment.twix(new Date('2021-05-02'),new Date('2021-06')).iterate("days");
var rangeDates=[];
var rangeDatesObject = [];

while(itr.hasNext()){
  let data = itr.next().format("YYYY-MM-DD")
  rangeDates.push(data)
  rangeDatesObject.push({ data, otimo: 0, bom: 0, regular: 0, ruim: 0 })
}

//console.log(rangeDates);

module.exports = {
  rangeDates,
  rangeDatesObject
};
