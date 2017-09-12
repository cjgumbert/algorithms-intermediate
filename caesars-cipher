/*
In a shift cipher (Caesar's cipher) the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.All letters will be uppercase. 

Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

ASCII Codes for punctuation and space are all less than 65.
*/

function rot13(str) {
  var decipheredArray = [];
  
  for(var i = 0; i < str.length; i++){
    var asc2Code = str.charCodeAt(i);
    
      if(asc2Code >= 65 && asc2Code <= 77){
        asc2Code += 13;
        
      } else if(asc2Code >= 78 && asc2Code <= 90){
        asc2Code -= 13;
      }
    
    decipheredArray.push(String.fromCharCode(asc2Code));
    
  }
  
  return decipheredArray.join('');
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") --> "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
