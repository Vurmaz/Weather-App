import renderPage from './render.js'

let city = (function () {
    return 'Istanbul'
 })()
async function changeNameToCoord () {
try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c73731beb6f52c866916db135e9734f`)
    const responseData = await response.json()
    getData(responseData)
} catch(error){
    alert('This is not a city')
}
}
async function getData (data) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly,daily&appid=6c73731beb6f52c866916db135e9734f`)
        const responseData = await response.json()
        renderPage(responseData)
} catch(error) {
    alert('This is not a city')
}
}
export { city, changeNameToCoord }