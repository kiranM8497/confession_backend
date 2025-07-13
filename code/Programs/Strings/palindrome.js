function checkPlaindrome(str) {
  const newStr = [...str].reverse().join("");

  if (str === newStr) {
    console.log("its a pallindrome");
  } else {
    console.log("its not a plaindrome");
  }
}

function isItPalindrome(str) {
  let newStr = "";
  for (let character of str) {
    newStr = character + newStr;
  }
  if (str === newStr) {
    console.log("its a pallindrome");
  } else {
    console.log("its not a plaindrome");
  }
}

checkPlaindrome("nayan");
checkPlaindrome("racecar");
isItPalindrome("race");
isItPalindrome("racecar");
