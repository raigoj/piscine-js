function words(text) {
    return text.split(" ")
}
function sentence(text) {
    return text.join(" ")
}
function yell(text) {
    return text.toUpperCase()

}
function whisper(text) {
  let str = text.toLowerCase()
  str = "*" + str + "*";
  return str
}
function capitalize(text) {
    return text.toUpperCase()[0] + text.slice(1).toLowerCase()
}