import printWeather from './print';

const darkSkyKey = '856bb7a7aa1e7d6dd0d61976012b7fe2';
const weatherIcon = document.querySelector('.weather__icon img');
const cityName = document.querySelector('.city__name');
const temperature = document.querySelector('.temperature__value');
const pressure = document.querySelector('.pressure__value');
const humidity = document.querySelector('.humidity__value');
const windSpeed = document.querySelector('.wind-speed__value');
const forecast = [...document.querySelectorAll('.weather__forecast li')];

const getWeather = (lat, lon, city, identifier) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lon}?units=si&lang=pl`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    }).then(data => {
        if (!identifier) {
            printWeather(data, city, weatherIcon, cityName, temperature, pressure, humidity, windSpeed, forecast);
        } else {
            let weatherIconE = document.querySelector('.' + identifier + ' .weather__icon img');
            let cityNameE = document.querySelector('.' + identifier + ' .city__name');
            let temperatureE = document.querySelector('.' + identifier + ' .temperature__value');
            let pressureE = document.querySelector('.' + identifier + ' .pressure__value');
            let humidityE = document.querySelector('.' + identifier + ' .humidity__value');
            let windSpeedE = document.querySelector('.' + identifier + ' .wind-speed__value');
            let forecastE = [...document.querySelectorAll('.' + identifier + ' .weather__forecast li')];
            printWeather(data, city, weatherIconE, cityNameE, temperatureE, pressureE, humidityE, windSpeedE, forecastE, identifier);
        }
    }).catch(error => {
        console.log('error DarkSky', error);
    });
};

export default getWeather;