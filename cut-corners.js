function round(n) {
    let dec = n % 1
    if (n < 0) {
        if (dec <= -0.5) {
            return n - dec - 1
        } else {
            return n - dec
        }
    } else {
        if (dec >= 0.5) {
            return n - dec + 1
        } else {
            return n - dec
        }
    }
}
function ceil(n) {
    let dec = n % 1
    if (n == 0) {
        return 0
    }
    if (n < 0) {
        return n - dec
    } else {
        console.log(n)
        return n - dec + 1
    }
}
function floor(n) {
    let dec = n % 1
    if (n < 0) {
        return n - dec - 1
    } else {
        return n - dec
    }
}
function trunc(n) {
    let dec = n % 1
    if (n < 0) {
        return n - dec
    } else {
        return n - dec
    }
}
