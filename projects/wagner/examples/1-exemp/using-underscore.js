
var _ = require('underscore');


var temp1 = [
  {id:1,name:"safeer"},  //temp array
  {id:2,name:"jon"},
  {id:3,name:"James"},
  {id:4,name:"deepak"},
  {
    id:5,
    name:"ajmal",
    enderecos: [
      { bairro: "jardim antonio" },
      { bairro: "jardim mfdf" }
    ]
  }
];

var id = _.pluck(temp1,'id'); //get id array from temp1
  var ids=[2,5,10];             //ids to be removed
  var bool_ids=[];
  _.each(ids,function(val){
   bool_ids[val]=true;
  });
  let temp2 = _.filter(temp1,function(val){
   return !bool_ids[val.id];
  });


console.log('--------------------------------')
 // console.log(JSON.stringify( ids , false, 2))
 // console.log(JSON.stringify(temp1, false, 2))
console.log(JSON.stringify(  temp1, false, 2))
console.log('--------------------------------')
console.log(JSON.stringify(  temp2, false, 2))
