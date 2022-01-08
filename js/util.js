// import * as _ from 'lodash';
import { resetForm } from './form.js';
const ALERT_SHOW_TIME = 5000;
const KEY_ESC= 27;
//Получение случайного целого числа
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    const TEMP = min;
    min = max;
    max = TEMP;
  }
  if (min === max) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Получение случайного дробного числа
const getRandomFloat = (min, max, countСharacter) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    const TEMP = min;
    min = max;
    max = TEMP;
  }
  if (min === max) {
    min = 0;
  }

  return (Math.random() * (max - min + 1) + min).toFixed(countСharacter);
}


const getArrayUniq = (array) => {
  const randomLength = getRandomInt(1, 6);
  return _.uniq(_.take(array, randomLength));
};

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const formDisabled = (form, collection) => {
  form.classList.add('ad-form--disabled');
  for(let el of collection) {
    el.setAttribute('disabled', 'disabled');
  }
};

const formActive = (form, collection) => {
  form.classList.remove('ad-form--disabled');
  for(let el of collection) {
    el.removeAttribute('disabled', 'disabled');
  }
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const closePopupClick = (popup) => {
  document.addEventListener('click', () => {
    popup.remove();
  });
};

const closePopupEsc = (popup) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === KEY_ESC) {
      popup.remove();
    }
  });
};

const showSuccessMessage = () => {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  const templateMessage = document.querySelector('#success').content.querySelector('.success');
  const message = templateMessage.cloneNode(true);
  message.style.zIndex = '1000';
  body.appendChild(message);
  closePopupClick(message);
  closePopupEsc(message);
  resetForm();
};

const showUnsuccessMessage = () => {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  const templateMessage = document.querySelector('#error').content.querySelector('.error');
  const message = templateMessage.cloneNode(true);
  message.style.zIndex = '1000';
  body.appendChild(message);
  const button = message.querySelector('.error__button');
  button.addEventListener('click', () => {
    message.remove();
  })
  setTimeout(() => {
    message.remove();
  }, 5000);
}

export { getRandomInt, getRandomFloat, getArrayUniq, getRandomArrayElement, formDisabled, formActive, showAlert, showSuccessMessage, showUnsuccessMessage }
