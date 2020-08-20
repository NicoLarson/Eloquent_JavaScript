let range = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
let sum = (arr) => {
    let add = 0
    for (let i = 0; i < arr.length; i++) {
        add += arr[i]
    }
    return add
}
console.log(range(1, 10))
console.log(sum(range(1, 10)))