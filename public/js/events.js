import getLocationCords from './getCords';
import changeCity from './editCity';
import {btnClose, btnEdit} from './cloneModule';

const moduleForm = document.querySelector('.module__form');
const formBtnClose = document.querySelector('#app .module__form .btn--close');
const btnAddCity = document.getElementById('add-city');
const inputSearch = document.getElementById('search');
const form = document.querySelector('.find-city');
const searchError = document.querySelector('.search-error');

document.querySelector('.weather__icon img').style.pointerEvents = 'none';
btnAddCity.addEventListener('click', () => {
    moduleForm.removeAttribute('hidden');
});
formBtnClose.addEventListener('click', () => {
    moduleForm.setAttribute('hidden', true);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = inputSearch.value;
    document.body.classList.add('loading');
    getLocationCords(input);
    inputSearch.value = '';
    searchError.textContent = '';
});

const updateButtonsEvent = () => {
    [...btnClose].forEach(btn => {
        btn.addEventListener('click', (e) => {
            let module = e.target.dataset.module;
            let element = document.querySelector('#app .' + module);
            if (document.body.contains(element)) {
                element.remove();
            }
        });
    });
    [...btnEdit].forEach(btn => {
        btn.addEventListener('click', (e) => {
            let module = e.target.dataset.module;
            let element = document.querySelector('#app .' + module);
            if (!document.getElementById('search_' + module)) {
                changeCity(element, module);
            }
        });
    });
};

export {updateButtonsEvent, btnClose, btnEdit, searchError, form};