/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

function stantonMeasure( input) {
  let n=0, result=0
  input.forEach(e => e==1?n++:0 )
  input.forEach (e=> e==n? result++:0)
return result
}

// console.log((stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])))