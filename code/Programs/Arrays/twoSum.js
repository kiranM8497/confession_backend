function twoSum(arr, target) {
  if (!Array.isArray(arr)) return null;

  if (typeof target !== "number") return null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return "not found";
}

const result = twoSum([2, 9, 3, 1, 5], 100);
console.log(result);
