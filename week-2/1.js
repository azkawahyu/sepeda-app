const charCount = (string) => {
    let store = {} 
    let result = 0
    let stringUpper = string.toUpperCase()
    
    for (let i = 0; i < string.length; i++) {
        if(stringUpper[i] in store) {
            store[stringUpper[i]] += 1
        } else {
            store[stringUpper[i]] = 1
        }
        if(store[stringUpper[i]] === 2 ){result ++}
        }
    return result
    }