const isWinner = async(country) => {
    const api = await db
    let winner, results
    try {
        winner = await api.getWinner(country)
        results = await(api.getResults(winner.id))
    } catch {
        return `${country} never was a winner`
    }
    if(winner.continent != 'Europe') {
        return `${country} is not what we are looking for because of the continent`
    }
    if(results.length == 0) {
        return `${country} never was a winner`
    }
    if(results.length < 3) {
        return `${country} is not what we are looking for because of the number of times it was champion`
    }
    let years = results.map(i => i.year).join(', ')
    let scores = results.map(i => i.score).join(', ')
    return `${country} won the FIFA World Cup in ${years} winning by ${scores}`
}