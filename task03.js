// Task 3 - https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR0cz-bnHFpnEbr1zBd_sbyaLoHQ1_s461cAM8aORQFhEjoFv9IeWDO7CNw

function buildFun(n) {
  var res = [];
  for (let i = 0; i < n; i++){
   res.push(function() {
   return i;
 })
 } 
  return res;
} 
