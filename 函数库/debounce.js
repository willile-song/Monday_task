let debounce = (func, timeout) => {
    let timer
    return function () {
        clearTimeout(timer)
        let args = arguments
        timer = setTimeout(function () {
            func.apply(null, args)
        }, timeout)
    }
}

let handle = debounce(function(a,b) {
    console.log(a+b)
},1000)

window.onresize = function() {
    handle(1,3)
}