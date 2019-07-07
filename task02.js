// Task 2 - https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR0rhqoGAU3xiPplaidh1RgWmx1erPaztOjaYobMTNobjnt3DvACWdfG_Go

function whatNumberIsIt(n) {
  switch(n) {
   case Number.MAX_VALUE: return ('Input number is Number.MAX_VALUE');
   case Number.MIN_VALUE: return ('Input number is Number.MIN_VALUE');
   case Number.NEGATIVE_INFINITY: return ('Input number is Number.NEGATIVE_INFINITY');
   case Number.POSITIVE_INFINITY: return ('Input number is Number.POSITIVE_INFINITY');
   case Number(n): return 'Input number is ' + n;
  default: return 'Input number is Number.NaN';
  }
}
