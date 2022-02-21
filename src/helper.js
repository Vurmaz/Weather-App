function convertKelvinToCelcius (kelvin) {
    return kelvin - 273.15
} 
function unixConverter (item) {
    return new Date(item * 1000)
}
function convertHours (item) {
    const day = item.getHours()
    return day
}
function getDayName (item) {
    return item.toLocaleDateString("en-EN", { weekday: 'long' });
}
function AmPMConverter(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let converter = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0'+ minutes : minutes
    let actualTime = hours + ':' + minutes + ' ' + converter
    return actualTime
}
export { convertKelvinToCelcius,unixConverter,convertHours,getDayName,AmPMConverter }