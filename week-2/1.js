// Case insensitive ES 6
const countDuplicate = (text) =>{
  let count = 0
  let obj = {}
  for ( let i of text) {
    i = i.toLowerCase()
    if (!obj[i]) {
      obj[i]=1
    } else {
      obj[i]++
    }
  }
  for (let i in obj) {
    if(obj[i]>1){
      count++
    }
  }
  return count
}

console.log(countDuplicate("abcde"))
console.log(countDuplicate("aabbcde"))
console.log(countDuplicate("aabBcde"))
console.log(countDuplicate("indivisibility"))
console.log(countDuplicate("Indivisibilities"))
console.log(countDuplicate("aA11"))
console.log(countDuplicate("ABBA"))
