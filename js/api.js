import { showAlert } from './util.js';
const getOffers = async () => {
  return fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        showAlert('Что-то пошло не так. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Что-то пошло не так. Попробуйте ещё раз');
    });
};

export { getOffers }
