const retry = (count, callback) => {
    return async (...arg) => {
        for(let i = 0; i <= count; i++) {
            try {
                return await callback(...arg)
            } catch(e) {
                if(i >= count) {
                    throw e
                }
            }
        }
    }
}

const timeout = (delay, callback) => {
    let timeOut = false
    return async (...args) => {
        setTimeout(_ => timeOut = true, delay)
        let res = await callback(...args)
        if(timeOut) {
            throw new Error('timeout')
        }
        return res
    }
}