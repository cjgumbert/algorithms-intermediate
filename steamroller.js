// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  
  var flatArray = [];
  
  function flatten(a){
    
    if(!Array.isArray(a)){
      flatArray.push(a);
      
    } else if (Array.isArray(a)){
      
      for(var i = 0; i < a.length; i++){
        flatten(a[i]);
      }
    }
  }
  
  arr.forEach(flatten);
  
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
