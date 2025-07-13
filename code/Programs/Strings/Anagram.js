function checkAnagram(str, str2) {
  if (str.length !== str2.length) return false;
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // console.log(freq)
  for (let char of str2) {
    if (!str2[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(checkAnagram("kiran", "arxki"));
