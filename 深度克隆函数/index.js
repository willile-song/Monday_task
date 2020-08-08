let obj = {
    a:1,
    b: {
        c:3
    },
    d: function() {
        console.log(11)
    },
    e: null,
    f: [1,2,3]
}
obj.g = {}
obj.g.h = obj
let deepClone = (origin,checkoutMap = new WeakMap()) => {
    if(checkoutMap.has(origin)) return checkoutMap.get(origin)   // 判断是否拷贝过，如果拷贝过，就将weakMap的属性值副本返回
    let res = Array.isArray(origin) ? [] : {}
    checkoutMap.set(origin, res)                                 // 原属性值作为key，拷贝属性值作为value放入weakmap中
    let toString = Object.prototype.toString
    for(let prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            if(typeof origin[prop] !== 'object' || origin[prop] === null || origin[prop] instanceof Date) {
                res[prop] = origin[prop]
             }else {
                res[prop] = toString.call(origin[prop]) === '[object Object]' ? deepClone(origin[prop],checkoutMap) : deepClone(origin[prop])
             }
        }
    }
    return res
}
let obj_1 = deepClone(obj)
console.log(obj_1)