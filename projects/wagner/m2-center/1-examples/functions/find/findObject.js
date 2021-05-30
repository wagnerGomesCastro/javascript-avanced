// https://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition

a = [
  {prop1:"abc",prop2:"qwe"},
  {prop1:"bnmb",prop2:"yutu"},
  {prop1:"zxvz",prop2:"qwrq"}];
    
index = a.findIndex(x => x.prop2 ==="yutu");

console.log(index);
