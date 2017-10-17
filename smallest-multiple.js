/* 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function smallestCommons(arr) {
  var arrOrdered = arr.sort();
  var a = true;
  var lcm = 0;
  
  while(a){
    lcm += arrOrdered[arrOrdered.length - 1];
    for(var i = arrOrdered[0]; i <= arrOrdered[arrOrdered.length - 1]; i++){
      if(lcm % i !== 0){
        break;
      } else if(i === arrOrdered[arrOrdered.length - 1]){
        a = false;
      }
    }
  }
  return lcm;
}


smallestCommons([2,3]);
