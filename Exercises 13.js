function xo(str) {
  var x = str.split('o').length;
  var o = str.split('x').length;
  
   if (x === o) {
    return true;
  } else {
    return false;
  } 
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
