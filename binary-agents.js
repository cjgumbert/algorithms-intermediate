// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  var splitted = str.split(' ');
  
  var unicoded = splitted.map(function(value1){
    return parseInt(value1, 2);
  });
                              
  var letterArray = unicoded.map(function(value2){
    return String.fromCharCode(value2);
  });
  
  var newString = letterArray.join('');
  
  return newString;
}

binaryAgent("01100110 01110101 01101110 00100001");
