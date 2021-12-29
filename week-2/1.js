const duplicateCount = (input) => {
    data = {},
    result = 0;    
    for( i = 0; i < input.length; i++){   
      if(!data[input[i]]){
          data[input[i]] = 1;
      } 
      else if(data[input[i]] < 2) {
          data[input[i]]+=1;
          result++;
      }    
    }
    return result;
}

console.log(duplicateCount('AAbbCCdde'))
