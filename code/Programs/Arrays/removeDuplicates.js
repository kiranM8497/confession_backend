function removeDuplicates(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let exists = false;

    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) unique.push(arr[i]);
  }
  console.log(unique);
  return unique;
}

function removeDupliCates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // we need to check if newArr all ready have current element.
    let exists = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
}

function removeDuplicateMembers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
}
function removeDuplicateMembersWithSet(arr) {
  const newArr = [...new Set(arr)];

  console.log(newArr);
}

removeDuplicates([2, 3, 2, 4, 5, 6, 3, 1]);
removeDupliCates([2, 3, 2, 4, 5, 6, 3, 1]);
removeDuplicateMembers([2, 3, 2, 4, 5, 6, 3, 1]);
removeDuplicateMembersWithSet([2, 3, 2, 4, 5, 6, 3, 1]);
