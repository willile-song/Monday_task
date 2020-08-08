let throttle = (func, timeout) => {
    let timer
    return function() {
        let args = arguments
        if(timer) return;
        timer = setTimeout(function() {
            func.apply(null,args)
            timer = null
        },timeout)
    }
}

let throttle_2 = (func, timeout) => {
    let timer
    return function() {
        if(!timer || Date.now() - timer >= timeout) {
            func.apply(null,arguments)
            timer = Date.now()
        }
    }
}

let t1 = throttle(function() {
    console.log("throttle")
},1000)
let t2 = throttle_2(function() {
    console.log("throttle_2")
},1000)
window.onresize = function() {
    // t1()
    t2()    
}