
const sumOfCubes = (arr) =>
{ 
  if(arr.length == 0) return 0
  let a = arr.map(e=>Math.pow(e,3))
  return a.reduce((a,b)=>a+b)
 }

  console.log(sumOfCubes([1, 5, 9]));
  console.log(sumOfCubes([3, 4, 5]));
  console.log(sumOfCubes([2]));
  console.log(sumOfCubes([]));
  