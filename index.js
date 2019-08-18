// Add your functions here


function map(array, callback) {
    let newArray = []
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      newArray.push(callback(element))
    }
    return newArray;
  }



  function reduce(src, cb, starting){
    let r = (starting) ? starting : src[0] // if start point is greater than 0, then start at that number, otherwise start at the first number in the array
    let i = (starting) ? 0 : 1 // if there is a starting number, then add everything from index 0, otherwise add from index 1 and use index 0 as the starting point
  
    for (; i < src.length; i++) {
      r = cb(src[i], r) //pass through each element and the running total
    }
  
    return r;
}