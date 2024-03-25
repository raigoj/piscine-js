function slice(str, start, end = str.length) {
    if (start < 0) {
        start += str.length
    }
    if (end < 0) {
        end += str.length
    }
    let result = ''
    let arr = []
    if (typeof str == 'string') {
        end -= 1
        for (; start <= end; start++) {
            result += str.charAt(start);
        }
    } else {
        for (let i = 0; i <= str.length -1; i++) {
            if (i >= start && i < end) {
                if (Array.isArray(str)) { 
                    arr.push(str[i])
                } 
            }
        }
    }
    if (typeof str == 'string') {
        return result
    }
    return arr
}
