import {city,changeNameToCoord } from './getData.js'
import renderPage from './render.js'

 function submitForm () {
    const input = document.querySelector('input')
    const form = document.querySelector('form')
    form.addEventListener('submit',(event) => {
        event.preventDefault()
        city = input.value
        changeNameToCoord()
        input.value = ''
    })  
}
window.addEventListener('load',async function () {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.0351&lon=28.9833&exclude=daily&appid=6c73731beb6f52c866916db135e9734f`)
    const responseData = await response.json()
    renderPage(responseData)
})
export default function initWeb(){
    switchTemp()
    submitForm()
}