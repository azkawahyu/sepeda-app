const sumOfCubes = (arr) => {
  return arr.map((e) => Math.pow(e, 3)).reduce((prev, curr) => prev + curr, 0);
};

console.log(sumOfCubes([1, 5, 9])); // 855
console.log(sumOfCubes([3, 4, 5])); // 216
console.log(sumOfCubes([2])); // 8
console.log(sumOfCubes([])); // 0
