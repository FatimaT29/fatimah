const temp =document.getElementById('Temp')
const Name =document.getElementById('name')
const Humidity =document.getElementById('hum')
const Wind =document.getElementById('wind')
const Icone =document.getElementById('icone')
const Input =document.getElementById('search-bar')
const btn =document.getElementById('search-btn')
const country =document.getElementById('count')

async function weather(params) {
    url =await fetch(`https://api.weatherapi.com/v1/current.json?key=c5cbce7ac5a6432ab18131437250308&q=${Input.value}`)
    promise = await url.json()
    console.log(promise);
    temp.innerHTML = parseInt(await promise.current.temp_c)
    Name.innerHTML = await promise.location.name
    country.innerHTML = await promise.location.country
    Icone.src = await promise.current.condition.icon
    Humidity.innerHTML = parseInt(await promise.current.humidity) + "%" 
    Wind.innerHTML = parseInt(await promise.current.wind_kph) + "k/h"
    
}
weather()
btn.addEventListener('click', weather)