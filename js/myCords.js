import getWeather from './weather';

const myLocationCords = () => {
    fetch('https://ipapi.co/json/').then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    }).then(data => {
        getWeather(data.latitude, data.longitude, data.city);
    }).catch(error => {
        console.log('error IPLocating', error);
    });
};

export default myLocationCords;