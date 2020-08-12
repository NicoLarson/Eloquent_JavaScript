let countChar = (str, char) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        str[i] == char ? count++ : false
    }
    return count
}

let countBs = (str) => {
    return countChar(str, "B")
}