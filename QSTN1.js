// A function that accepts a string as input and swaps the case of each character
  function swapCase(str) {
     // Initiate an empty result array to store the modified characters
    let result = [];
// Repeat over each character in the input str
    for (let x = 0; i < str.length; x++) {
      if (str[x] === str[x].toUpperCase()) {
        // If it is, push its lowercase equivalent to the result array
        result.push(str[x].toLowerCase());
      }
      // Otherwise, if the live character is in lowercase form
       else if (str[i] === str[x].toLowerCase()) {
        // Push its uppercase equivalent to the result array
     result.push(str[x].toUpperCase());
      } 
      else {
        // Then push the character to the result array as is
        result.push(str[x]);
      }
    }
    return result.join('');
  }
 // example:
  console.log(swapCase('The Quick Brown Fox')); // tHE qUICK bROWN fOX
  