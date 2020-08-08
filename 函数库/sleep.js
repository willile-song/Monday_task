
(function() {
    function sleep (time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        })
    }
    
    async function testSleep() {
        console.log('sleep_1')
        await sleep(1000)
        console.log('sleep_2')
    }
    
    testSleep()
})()