/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

*/

function pairElement(str) {
  str = str.toUpperCase();
  var array = str.split("");
  
  var dnaStrand = [];
  
  for(var i = 0; i < array.length; i++){
    if(array[i] === "G"){
      dnaStrand.push(["G", "C"]);
      
    } else if(array[i] === "C") {
      dnaStrand.push(["C", "G"]);
      
    } else if(array[i] === "A") {
      dnaStrand.push(["A", "T"]);
      
    } else if(array[i] === "T") {
      dnaStrand.push(["T", "A"]);
    }
  }
  return dnaStrand;
}

pairElement("GCG");
