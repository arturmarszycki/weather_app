import getWeather from './weather';

const myLocationCords = () => {
    fetch('http://ip-api.com/json/').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    }).then(data => {
        getWeather(data.lat, data.lon, data.city);
    }).catch(error => {
        console.log('error IPLocating', error);
    });
};

export default myLocationCords;