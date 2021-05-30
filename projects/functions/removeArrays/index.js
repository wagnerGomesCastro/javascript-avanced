
//https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript

var myArray = [{'name': 'test'}, {'name':'test2'}];
var myObject = {'name': 'test'};
myArray.splice(myArray.indexOf(myObject),1);
