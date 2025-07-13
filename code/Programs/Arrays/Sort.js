function sortMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        //swapt them
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  console.log(arr);
  return arr;
}

function sortMe2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        //swapt them
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  console.log(arr);
  return arr;
}

function builtInSort(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr;
}

function builtInSort2(arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
  return arr;
}

sortMe([5, 3, 8, 1, 2]);
sortMe2([5, 3, 8, 1, 2]);
builtInSort([5, 3, 8, 1, 2]);
builtInSort2([5, 3, 8, 1, 2]);
