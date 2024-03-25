function sign(n) {
    if (n>0) {
        return 1
    } 
    if (n<0) {
        return -1
    }
    if (n==0) {
        return 0
    }
}
function sameSign(a, b) {
    if (a<0 && b<0) {
        return true
    }
    if (a>0 && b>0) {
        return true
    }
    if (a==0 && b==0) {
        return true
    } else {
        return false
    }
}