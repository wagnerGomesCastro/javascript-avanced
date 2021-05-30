// https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
Array.prototype.unique = function() { 
  var a = this.concat(); 
  for(var i=0; i<a.length; ++i) { 
      for(var j=i+1; j<a.length; ++j) { 
          if(a[i] === a[j]) 
              a.splice(j--, 1); 
      } 
  } 

  return a; 
}; 

// https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
Array.prototype.remove = function(elem) {
  var indexElement = this.findIndex(el => el === elem);
  if (indexElement != -1)
  this.splice(indexElement, 1);
  return this;
}; 
