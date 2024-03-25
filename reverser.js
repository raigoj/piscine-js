function reverse(str) {
    if (typeof str == 'string') {  
        let newString = ''
        for (var i = str.length - 1; i >= 0; i--) { 
            newString += str[i];
        }
        return newString
    } else {
        var ret = new Array;
        for(var i = str.length-1; i >= 0; i--) {
            ret.push(str[i]);
        }
        return ret;
    }
}
console.log(reverse('pouet'))