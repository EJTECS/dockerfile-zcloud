const delay = ms => new Promise(res => setTimeout(res, ms));


(async () => {
    while (1) {
        console.log("Testing...");
        await delay(1000);
    }
})()

