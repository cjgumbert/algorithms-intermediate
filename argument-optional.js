/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  
  function isNumber(input){
    return typeof input === "number" ? input : undefined;
  }
  
  var input1 = isNumber(arguments[0]);
  var input2 = isNumber(arguments[1]);
  
  if(arguments.length > 1){
    return input1 && input2 ? input1 + input2 : undefined;
  } else {
    if(input1){
      return function(secondInput){
        if(isNumber(secondInput)){
           return input1 + secondInput;
         } else {
           return undefined;  
         }
      };
    }
  }
  return undefined;
}

addTogether(2,3);
