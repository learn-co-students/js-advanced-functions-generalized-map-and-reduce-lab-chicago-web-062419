// Add your functions here

function map(array, callback) {
    let newArray = []
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      newArray.push(callback(element))
    }
    return newArray;
  }



  function reduce(source, callback, starting){
    let r = (starting) ? starting : source[0] 
    // start at starting point if it is >0, else start at 0
    let i = (starting) ? 0 : 1
     //if start # is present, then add everything to index 0, else add index 1 and with index 0 as the starting point
  
    for (; i < source.length; i++) {
      r = callback(source[i], r) 
    }
  
    return r;
}