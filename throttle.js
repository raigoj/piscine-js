const throttle = (func, delay) => {
    let debounceTimer
    let executed = false
    return function(...a) {
        if(!executed) {
            executed = true
            func(...a)
            clearTimeout(debounceTimer)
            debounceTimer = setTimeout(_ => {
                executed = false
            }, delay)
        }
    }
}

const opThrottle = (func, delay, options = {}) => {
    let debounceTimer
    let active = false
    let executed = false
    if(options?.trailing && options?.leading) {
        return function(...a) {
            if(active == false) {
                active = true
                clearTimeout(debounceTimer)
                debounceTimer = setTimeout(_ => {
                    func(...a)
                    active = false
                }, delay)
            }
            if(!executed) {
                executed = true
                func(...a)
                clearTimeout(debounceTimer)
                debounceTimer = setTimeout(_ => {
                    executed = false
                }, delay)
            }
        }
    }else if(options?.trailing) {
        return function(...a) {
            if(active == false) {
                active = true
                clearTimeout(debounceTimer)
                debounceTimer = setTimeout(_ => {
                    func(...a)
                    active = false
                }, delay)
            }
        }
    }else if(options?.leading) {
        return function(...a) {
            if(!executed) {
                executed = true
                func(...a)
                clearTimeout(debounceTimer)
                debounceTimer = setTimeout(_ => {
                    executed = false
                }, delay)
            }
        }
    } else {
        return function() {}
    }
}