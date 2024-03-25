function interpolation(obj) {
    let xAdvance = (obj.end-obj.start)/obj.step
    let yAdvance = obj.duration/obj.step
    let nbStep = 0
    let timer = setInterval(function() {
        obj.callback([obj.start+(xAdvance*nbStep), yAdvance+(yAdvance*nbStep)])
        if(nbStep == obj.step-1){
            clearInterval(timer)
        }
        nbStep++
    }, yAdvance)
}