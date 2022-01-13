// const dropRight = (arr,n)=>{
//  if (n===undefined) n =0
//  if(n>arr.length) n = arr.length
//   return arr.slice(0,arr.length-n)
// }
// console.log(dropRight([1,5,7,2, 3]) );
// console.log(dropRight([1, 2, 3],2));
// console.log(dropRight([1, 2, 3], 3));
// console.log( dropRight([1, 2, 3], 0));


const dropRight =(arr,n)=>{
  let ab =[] 
  if(n===undefined) n=0
  for (let i=0;i<arr.length-n;i++)
    ab.push(arr[i])
  return ab
}

console.log(dropRight([1,5,7,2, 3]) );
console.log(dropRight([1, 2, 3],2));
console.log(dropRight([1, 2, 3], 3));
console.log( dropRight([1, 2, 3], 0));