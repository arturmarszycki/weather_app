import getWeather from './weather';
import {searchError} from './events';

const graphKey = '422949bb-9a01-4eac-aba7-4db274006703';

const getLocationCords = (city, identifier) => {
    fetch(`https://graphhopper.com/api/1/geocode?key=${graphKey}&q=${city}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    }).then(data => {
        let lat = data.hits[0].point.lat;
        let lon = data.hits[0].point.lng;
        let city = data.hits[0].name;
        getWeather(lat, lon, city, identifier);
    }).catch(error => {
        console.log('error GeoLocating', error);
        searchError.textContent = 'Nieprawidłowa miejscowość';
        document.body.classList.remove('loading');
    });
};

export default getLocationCords;