import {cloneModule} from './cloneModule';

const moduleWeather = document.querySelector('.module__weather');
const weekDays = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

const printWeather = (data, location, icon, city, temp, pres, hum, wind, array, identifier) => {
    icon.setAttribute('src', `images/icons/${data.currently.icon}.svg`);
    city.textContent = location;
    temp.textContent = data.currently.temperature.toFixed(1);
    pres.textContent = `${data.currently.pressure.toFixed()} hPa`;
    hum.textContent = `${data.currently.humidity * 100}%`;
    wind.textContent = `${data.currently.windSpeed.toFixed(1)} m/s`;
    let currentDay = new Date().getDay(), counter = 0;
    array.forEach(element => {
        element.querySelector('.day').textContent = weekDays[currentDay];
        currentDay === weekDays.length - 1 ? currentDay = 0 : currentDay++;
        element.querySelector('img').setAttribute('src', `images/icons/${data.daily.data[counter].icon}.svg`);
        let temperatureAvg = (data.daily.data[counter].temperatureMax + data.daily.data[counter].temperatureMin) / 2;
        element.querySelector('.temperature__value').textContent = temperatureAvg.toFixed(1);
        counter++;
    });
    document.body.classList.remove('loading');
    if (!identifier) {
        cloneModule(moduleWeather);
    }
};

export default printWeather;