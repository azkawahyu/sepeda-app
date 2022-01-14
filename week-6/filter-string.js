const filteredArray = (array) => {
  return array.filter((element) => 
  typeof element !== "string");
};
console.log(filteredArray([1,2,"a","b"]))
console.log(filteredArray([1,"a","b",0,15]))
console.log(filteredArray([1,2,"aasf","1","123",123]))