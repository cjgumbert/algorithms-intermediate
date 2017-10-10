// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.


function booWho(bool) {
  
  var test = typeof(bool);
  
    if(test === "boolean") {
      return true;
    } else {
      return false;
    }
}

booWho(null);
