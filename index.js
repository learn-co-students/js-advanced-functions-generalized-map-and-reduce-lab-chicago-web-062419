// Add your functions here
const map = (array, func) => {
    let newArr = []
    for(let i = 0; i < array.length; i++) {
        newArr.push(func(array[i]))
    }
    return newArr
}

const reduce = (array, func, start) => {
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for(; i < array.length; i++) {
        r = func(array[i], r)
    }
    return r
}