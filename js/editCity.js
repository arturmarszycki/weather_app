import getLocationCords from './getCords';
import {form} from './events';

let moduleForms = document.querySelectorAll('#app .module__weather .find-city');

const updateFormEvents = (module, identifier) => {
    [...moduleForms].forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let newCity = module.querySelector('.find-city input').value;
            document.body.classList.add('loading');
            module.querySelector('.find-city').remove();
            module.querySelector('.city').style.display = 'block';
            getLocationCords(newCity, identifier);
        });
    });
};

const changeCity = (module, identifier) => {
    let editForm = form.cloneNode(true);
    editForm.querySelector('input').setAttribute('id', 'search_' + identifier);
    module.querySelector('.city').style.display = 'none';
    module.querySelector('.weather__info').prepend(editForm);
    moduleForms = document.querySelectorAll('#app .module__weather .find-city');
    updateFormEvents(module, identifier);
};

export default changeCity;