async function getJSON(path, params) {
    let url = path + '?' + new URLSearchParams(params).toString()
    console.log(url)
    try {
        let res = await fetch(url)
        let json = await res.json()
        if(!res.ok) {
            throw Error(res.statusText)
        }
        if(json.error) {
            throw Error(json.error)
        }   
        return json.data
    } catch(err) {
        throw err
    }
}