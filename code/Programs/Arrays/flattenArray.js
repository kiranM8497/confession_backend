function flatten(arr) {
  let newArr = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      //if its another array
      console.log(newArr);
      newArr = newArr.concat(flatten(item));
    } else {
      newArr.push(item);
    }
  }

  console.log(newArr);
}

function flattenDeep(arr) {
  let result = [];
  console.log(arr);
  for (let item of arr) {
    if (Array.isArray(item)) {
      // if its an array we are concating the items
      result = result.concat(flattenDeep(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// flatten([1, [2, [3, [4]]], 5]);
const flattenArray = flattenDeep([1, [2, [3, [4]]], 5]);
console.log(flattenArray);

// In one of those steps, we did:

// result = result.concat(flattenDeep(item));
// Let’s say result = [3]
// And flattenDeep(item) (where item = [4]) returns [4]

// So this becomes:

// result = [3].concat([4]) → [3, 4]
// You're saying:

// "Take my current result [3] and add the flattened result [4] to it."

// 🔄 In Simple Terms:

// flattenDeep([1, [2, [3, [4]]]])
// ↓
// 1 + flattenDeep([2, [3, [4]]])
// ↓
// 2 + flattenDeep([3, [4]])
// ↓
// 3 + flattenDeep([4])
// ↓
// 4
// ⬆
// builds back up: [4] → [3, 4] → [2, 3, 4] → [1, 2, 3, 4]
