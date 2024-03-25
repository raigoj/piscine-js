function indexOf(arr, ch, index) {

    if (index == undefined) {
        index = 0
    }
    for (; index <= arr.length; index++) {
        if (arr[index]==ch){
            return index
        }
    }
    return -1
}
function lastIndexOf(arr, ch, index) {
    if (index == undefined) {
        index = arr.length -1
    }
    for (; index >= 0; index--) {
        if (arr[index]==ch){
            return index
        }
    }
    return -1
}
function includes(arr, ch, index) {
    if (index == undefined) {
        index = 0
    }
    for (; index <= arr.length; index++) {
        if (arr[index]==ch){
            return true
        }
    }
    return false
}
