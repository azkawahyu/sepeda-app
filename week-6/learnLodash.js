const dropRight = (arr, n) => {
  if (n == null) {
    arr.pop();
    return arr;
  }
  for (let i = n; i > 0; i--) {
    arr.pop();
    n--;
  }
  return arr;
};

console.log(dropRight([1, 2, 3])); // [1, 2]
console.log(dropRight([1, 2, 3], 2)); // [1]
console.log(dropRight([1, 2, 3], 5)); // []
console.log(dropRight([1, 2, 3], 0)); // [1, 2, 3]
