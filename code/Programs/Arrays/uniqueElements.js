function uniqueElements(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const arr = uniqueElements([2, 3, 4, 2, 5, 6, 33, 6, 3, 2]);
console.log(arr);
