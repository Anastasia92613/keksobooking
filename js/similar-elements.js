import { similarAuthor, similarOffer } from './data.js';

const templateCard = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();
const createFullOffers = _.merge(similarOffer, similarAuthor);

const nameType = (type) => {
  switch(type){
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return'Дворец';
    default:
      return 'Неизвестное значение';
  }
};

const fillingOfferContent = () => {
  createFullOffers.forEach(({title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, avatar}) => {
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
    cardElement.querySelector('.popup__avatar').src = avatar;
    fragment.appendChild(cardElement);
  });
  mapCanvas.appendChild(fragment.children[0]);
};

export { fillingOfferContent }
