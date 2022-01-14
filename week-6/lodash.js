const dropRight = (array, a) => {
  if (a === undefined || a < 0 || typeof a !== "number") {
    array.pop();
    return array;
  } else {
    for (let i = 0; i < a; i++) {
      array.pop();
    }
    return array;
  }
};
console.log(dropRight([1,2,3]))
console.log(dropRight([1,2,3],2))
console.log(dropRight([1,2,3],5))
console.log(dropRight([1,2,3],0))

