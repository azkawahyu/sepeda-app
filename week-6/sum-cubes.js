const sumOfCubes = (arr) => 
arr.reduce((a, num) => 
a + num ** 3, 0);

console.log(sumOfCubes([1,5,9]));
console.log(sumOfCubes([3,4,5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
