// Add your functions here
function map(array, fn){
    let newArray = []
    array.forEach(thing => newArray.push(fn(thing)))
    return newArray
}

function reduce(array, fn, start){
    let r = (!!start)? start: array[0]
    let i = (!!start)? 0:1
    for(;i < array.length; i++){
        r = fn(array[i], r)
    }
    return r
}