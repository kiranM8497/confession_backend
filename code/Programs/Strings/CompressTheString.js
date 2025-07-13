function compressString(str) {
  if (typeof str !== "string") return null;
  if (str.length === 0) return null;

  let compressedString = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedString += str[i] + count;
      count = 1;
    }
  }

  return compressedString;
}

const compressedString = compressString("aabhhnjuus");
console.log(compressedString);
