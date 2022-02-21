import { convertKelvinToCelcius,unixConverter,getDayName,AmPMConverter } from './helper.js'
import { city } from './getData.js'

function renderPage (data) {
    changeCityName()
    changeDateText(data)
    changeWeatherState(data)
    changeTemperature(data)
    changeFeelsLike(data)
    changeIcon(data)
    changeHumidity(data)
    chnageWindSpeed(data)
    changeDewPoint(data)
    renderDailyData()
    changeBackground(data)
}
function changeCityName () {
    const cityText = document.querySelector('.cityName')
    cityText.innerText = city.toUpperCase()
}
function changeWeatherState (data) {
    let weatherState = document.querySelector('.state')
    weatherState.innerText = data.current.weather[0].description.toUpperCase()
}
function changeDateText (data) {
    let todaysDate = document.querySelector('.time')
    let date = new Date(data.current.dt * 1000)
    todaysDate.innerText = `${AmPMConverter(date).toUpperCase()}`
}
function changeTemperature (data) {
    let temp = document.querySelector('.temp')  
    temp.innerText = `${Math.round(convertKelvinToCelcius(data.current.temp))}°C`   
} 
function changeHumidity (data) {
    let humidity = document.querySelector('.hum')
    humidity.innerText = `${data.current.humidity}%`
}
function changeFeelsLike (data) {
    let feelsLike = document.querySelector('.feels-like')
    feelsLike.innerText = `${Math.round(convertKelvinToCelcius(data.current.feels_like))}°C` 

}
function chnageWindSpeed (data) {
    let windSpeed = document.querySelector('.wind')
    windSpeed.innerText = `${data.current.wind_speed} km/h`
}
function changeIcon (data) {
    const icon = document.querySelector('.dayIcon') 
    icon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`   
}
function changeDewPoint (data) {
    const dew = document.querySelector('.dew')
    dew.innerText = `${Math.round(convertKelvinToCelcius(data.current.dew_point))}°C`

}
function renderDailyWeathers (data) {
    const daysDOM = document.querySelectorAll('.day')
    const iconDOM = document.querySelectorAll('.daily-icon')
    const tempDOM = document.querySelectorAll('.daily-temp')
    const days = Array.from(daysDOM)
    const icons = Array.from(iconDOM)
    const temps = Array.from(tempDOM)
    let j = 0
     for(let i = 8 ; i < data.list.length ; i += 8){
        days[j].innerText = getDayName(unixConverter(data.list[i].dt))
        icons[j].src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
        temps[j].innerText = `${Math.round(convertKelvinToCelcius(data.list[i].main.temp))}°C`
        j++
    }  
}
async function renderDailyData () {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6c73731beb6f52c866916db135e9734f`)
    const responseData = await response.json()
    renderDailyWeathers(responseData)
}
function changeBackground (data) {
    document.body.classList.remove(...document.body.classList)
    switch(data.current.weather[0].main){
        case "Clouds" :
            document.body.classList.add('cloud')
        break
        case "Rain" :   
        document.body.classList.add('rain')
        break
        case "Snow" : 
        document.body.classList.add('snow')
        break
        case "Thunderstorm" : 
        document.body.classList.add('thunderstorm')
        break
        case "Drizzle" :
            document.body.classList.add('drizzle')
        break
        case "Clear" :
            document.body.classList.add('clear')
        break
        default :
        document.body.classList.add('mist')
        
    }
}
export default renderPage