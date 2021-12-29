const duplicateCount = (input) => {
    input = input.toLowerCase();
    data = {},
    result = 0;    
    for( i = 0; i < input.length; i++){   
      if(!data[input[i]]){ 
          data[input[i]] = 1; // 'a': 1
      } 
      else if(data[input[i]] >= 1) {
          data[input[i]]+=1;
          result+=1;
      }    
    }
    return result;
}

console.log(duplicateCount('AAbbCcd'))
console.log(duplicateCount('AAbbCcddEEee')) // :(
