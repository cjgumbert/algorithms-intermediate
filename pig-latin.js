// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word 
// and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.

//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var vowels = /[aeiou]/;
  var stringArray = str.split("");
  var pigLatin = "";
  
  if(vowels.test(stringArray[0])) {
    pigLatin = stringArray.join("") + "way";
  }
  
  while(true){
    if(!vowels.test(stringArray[0])) {
      stringArray.push(stringArray.splice(0, 1));
    } else {
      break;
    }
    pigLatin = stringArray.join("") + "ay";
  }
  
  
  return pigLatin;
}

translatePigLatin("consonant");
