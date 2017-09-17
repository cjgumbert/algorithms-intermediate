// Convert the given number into a roman numeral.

function convertToRoman(num) {

  var romanNumeralConversion = "";
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  for(var i = 0; i < numbers.length; i++) {
  
      while(num >= numbers[i]){
        romanNumeralConversion += romanNumerals[i];
        num = num - numbers[i];
      }  
   } 

 return romanNumeralConversion;
}

convertToRoman(36);
