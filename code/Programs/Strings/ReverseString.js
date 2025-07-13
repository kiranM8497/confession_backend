const reverse = (str) => {
  // console.log(string.split('').reverse().join(''));
  //kiran => narki
  const charactersArray = [...str].reverse().join("");
  const charArr = Array.from(str).reverse().join("");
  console.log(charArr);
  console.log(charactersArray);
  return str.split("").reverse().join("");
};

function reverseIt(str) {
  let newStr = "";
  console.log(str.length);
  for (let i = str.length - 1; i >= 0; i--) {
    console.log("i is", i, str[i]);
    newStr += str[i];
  }

  console.log(newStr);
}
reverseIt("kiran");
// const str = reverse("kiran");
// console.log(str)
