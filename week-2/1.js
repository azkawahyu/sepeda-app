const sumRepeat = (str) => {
    let result = 0, arrTemp = [], arrRepeated = []
    let words = str.toLowerCase().split('')
    words.forEach((e) => {
        if(!arrTemp.includes(e)){
            arrTemp.push(e)
        }
        else {
            if(arrRepeated.includes(e)){
                result += 0
            }
            else {
                result += 1
                arrRepeated.push(e)
                
            }
        }
    })
    console.log(result)
}

sumRepeat("abcde")
sumRepeat("aabbcde")
sumRepeat("aabBcde")
sumRepeat("invisibility")
sumRepeat("Indivisibilities")
sumRepeat("AbBa")
sumRepeat("aA11")