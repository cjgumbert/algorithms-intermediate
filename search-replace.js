// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on (str).
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).


function searchReplace(str, before, after) {
  
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
    
  } else {
    str = str.replace(before, after);
  }
  
  return str;
}

searchReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
