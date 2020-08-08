(function() {
    let memorize = (func) => {
        let cache = {}
        return function () {
            let key = Array.prototype.join.call(arguments,'-')
            return cache[key] = key in cache ? cache[key] : func.apply(this, arguments)
        }
    }
    
    let log = function(a) {
        console.log(a)
    }
    
    let m = memorize(log)
})()
