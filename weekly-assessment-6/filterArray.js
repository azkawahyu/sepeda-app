/* using new set 
function filterArray (arr){
let d = arr.filter(e=> typeof(e) ===typeof(12))
 return  [...new Set(d)]
}
*/

/*using  looping
function filterArray(arr) {
  let d = arr.filter(e=> typeof(e) ===typeof(12))
  for (let i=0;i<arr.length;i++)  
     for ( let j=i+1;j<d.length;j++) 
             if ( d[j] ===d[i]) {
                d.splice(j,1)
                j--        
            }  
  return d
}
*/

/*using filter */
const filterArray = (arr) =>{
  let d = arr.filter(e=> typeof(e) ===typeof(12))
  return d.filter((item, index) => d.indexOf(item) === index);
  }

console.log(filterArray([1,2,"a",0]))
console.log(filterArray([1, "a", "b", 0, 15]) );
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));