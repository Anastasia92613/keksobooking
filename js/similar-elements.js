import { similarAuthor, similarOffer } from './data.js';

const templateCard = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();
const similarOffers = similarOffer;


const nameType = (type) => {
  let name = '';
  switch(type){
    case 'flat':
      name = 'Квартира';
      break;
    case 'bungalow':
      name = 'Бунгало';
      break;
    case 'house':
      name = 'Дом';
      break;
    case 'palace':
      name = 'Дворец';
      break;
    default:
      name = 'Неизвестное значение';
  }
  return name;
};


const addAvatr = (element, tag) => {
  similarAuthor.forEach(({avatar})=> {
    element.querySelector(`.${tag}`).src = avatar;
  })
}



similarOffers.forEach(({title, address, price, type, rooms, guests, checkin, checkout, features, description, photos}) => {
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = nameType(type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  cardElement.querySelector('.popup__features').textContent = features;
  cardElement.querySelector('.popup__description').textContent = description;
  cardElement.querySelector('.popup__photo').src = photos;
  addAvatr(cardElement, 'popup__avatar');
  fragment.appendChild(cardElement);
});

mapCanvas.appendChild(fragment.children[0]);
