import {updateButtonsEvent} from './events';

const appSection = document.getElementById('app');
let btnClose = document.querySelectorAll('#app .module__weather .btn--close');
let btnEdit = document.querySelectorAll('#app .module__weather .city .btn');
let moduleCounter = 0;
const cloneModule = (module) => {
    let newModule = module.cloneNode(true);
    newModule.querySelector('button').parentElement.classList.add('md_' + moduleCounter);
    newModule.querySelector('button').parentElement.removeAttribute('hidden');
    newModule.querySelector('button').dataset.module = 'md_' + moduleCounter;
    newModule.querySelector('button i').style.pointerEvents = 'none';
    newModule.querySelector('.city .btn').dataset.module = 'md_' + moduleCounter;
    newModule.querySelector('.city .btn i').style.pointerEvents = 'none';
    appSection.appendChild(newModule);
    btnClose = document.querySelectorAll('#app .module__weather .btn--close');
    btnEdit = document.querySelectorAll('#app .module__weather .city .btn');
    updateButtonsEvent();
    moduleCounter++;
    return newModule;
};

export {cloneModule, btnClose, btnEdit};