function multiply(a, b) {
    let result = 0
    let flag = false
    if (b < 0) {
        b = -b
        flag = true
    }
    while (b>0) {
        result += a
        b-- 
    }
    if (flag) {
        result = -result
    }
    return result
}
function divide(a, b) {
    let flag = false
    let count = false
    if (a > 0 && b > 0 && a < b) {
        return 0
    }
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
        flag = true
    }
    while (a > b) {
        a -= b
        count++
    }
    if (flag) {
        count = -count
    //     count -= 1
    // } else {
    //     count += 1
    }
    return count
}
function modulo(a, b) {
    var div = divide(a, b)
    var mul = multiply(div, b)
    return a - (multiply(divide(a, b), b))
}
console.log(divide(-123, 22))
