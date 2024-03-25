const escapeStr = '`\\/"\''
const arr = [4, '2']
const obj = new Object();
obj.str = 'suema'
obj.num = 12
obj.bool = false
obj.undef = undefined
const nested = {arr: [4, undefined, '2'], obj: {str:'str', num:2, bool:true} }
Object.freeze(nested.arr)
Object.freeze(nested.obj)
Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)