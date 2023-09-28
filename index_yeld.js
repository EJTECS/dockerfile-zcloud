async function* shouldContinueRunning(status) {
    while (status.shouldContinue) {
        yield true
    }
    return false
}

const LIMIT = 10_000


async function runUntilNoData({ fn, limit = LIMIT }) {
    // it needs to be an object to update shouldContinue by reference
    const status = { shouldContinue: true }
    for await (const shouldContinue of shouldContinueRunning(status)) {
        if (!shouldContinue) {
            return
        }
        status.shouldContinue = !!(await fn({ limit }))
        console.log(`runUntilNoData ${fn.name} status.shouldContinue`, status.shouldContinue)
    }
}


(async()=> {
    await runUntilNoData(() => {
        console.log("agora vai");
    })
})();