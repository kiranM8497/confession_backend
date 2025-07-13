function smallesNumber(arr) {
  if (!Array.isArray(arr) && arr.length < 0) return null;

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("smallest number is ", min);

  console.log("smalles number using Mah.min() is", Math.min(...arr));

  const smallesNumber = [...arr].sort((a, b) => a - b);
  return smallesNumber[0];
}

function largestNumber(arr) {
  if (!Array.isArray(arr) && arr.length < 0) return null;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("smallest number is ", max);

  console.log("smalles number using Mah.max() is", Math.max(...arr));

  const largestNumber = [...arr].sort((a, b) => b - a);
  return largestNumber[0];
}

const smallestNum = smallesNumber([2, 1, 4, 2, 6, 7, 2, 0]);
console.log(smallestNum);
const largestNum = largestNumber([2, 1, 4, 2, 6, 7, 2, 0]);
console.log(largestNum);
