function areRotations(str1, str2) {
  return (str1 + str1).includes(str2);
}

console.log(areRotations("cdeab", "abcde"));
