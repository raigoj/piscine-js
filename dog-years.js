function dogYears(planet, age) {
    const secToYear = 31557600
    if (planet == 'earth') {
        return Math.round(age / secToYear * 7 * 100) / 100
    } else if (planet == 'mercury') {
        age = (age / secToYear / 0.2408467 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'venus') {
        age = (age / secToYear / 0.61519726 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'mars') {
        age = (age / secToYear / 1.8808158 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'jupiter') {
        age = (age / secToYear / 11.862615 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'saturn') {
        age = (age / secToYear / 29.447498 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'uranus') {
        age =(age / secToYear / 84.016846 * 7)
        return Math.round(age * 100) / 100
    } else if (planet == 'neptune') {
        age = (age / secToYear / 164.79132 * 7)
        return Math.round(age * 100) / 100
    } 
}