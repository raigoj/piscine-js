function repeat(str, n) {
    let result = ''
    while (n>0) {
        result = result + str
        n--
    }
    return result
}
