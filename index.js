function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  for (let i=0; i< word.length/2; i++) {
    // Check each letter to the corresponding letter from the end.
    const j = word.length - 1 - i
    // if any letters don't match, return false
    if (word[i] !== word[j]) return false
  }
  return true
}

/* 
  Add your pseudocode here
  PSEUDOCODE
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false
  if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));


  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
