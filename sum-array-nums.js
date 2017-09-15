// Pass an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  var lowest = Math.min(arr[0], arr[1]);
  var highest = Math.max(arr[0], arr[1]);
  var difference = highest - lowest + 1;
  var range = [lowest];
  var sum;
  for (var i = 1; i<difference; i++) {
    range.push(lowest + i);
  }
  sum = range.reduce(function(a, b){
    return a + b;
  }, 0);
  return sum;
}

sumAll([5, 10]);
