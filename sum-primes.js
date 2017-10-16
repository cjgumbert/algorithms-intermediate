//Sum all the prime numbers up to and including the provided number.

//A prime number is defined as a number greater than one and having only two divisors, one and itself. 
//For example, 2 is a prime number because it's only divisible by one and two.

//The provided number may not be a prime.

function sumPrimes(num) {
  
  var primeNumsArray = [];
  
  for(var i = 2; i <= num; i++) {
    if(primeCheck(i) === true){
      primeNumsArray.push(i);
    }
  }
  
  return primeNumsArray.reduce(function(a, b){
    return a + b;
  });
}

function primeCheck(integer) {
  for(var j = 2; j < integer; j++){
    if(integer % j === 0){
      return false;
    }
  }
  return true;
}

sumPrimes(977);
