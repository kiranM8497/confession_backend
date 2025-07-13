function capitalize(str) {
  return str
    .split(" ")
    .map((word, i) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const sen = capitalize("hi i am kiran muttanwar");
console.log(sen);
