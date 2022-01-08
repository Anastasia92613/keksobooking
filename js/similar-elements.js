const templateCard = document.querySelector('#card').content.querySelector('.popup');

const nameType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Неизвестное значение';
  }
};

const fullOfferContent = (offer) => {
  const { offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos }, author: { avatar } } = offer;
  const cardElement = templateCard.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  if (price) {
    cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  if (type) {
    cardElement.querySelector('.popup__type').textContent = nameType(type);
  } else {
    cardElement.querySelector('.popup__type').classList.add('hidden');
  }
  if (rooms && guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests}`;
  } else {
    cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  if (checkin && checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  if (features) {
    cardElement.querySelector('.popup__features').textContent = features;
  } else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }
  if (description) {
    cardElement.querySelector('.popup__description').textContent = description;
  } else {
    cardElement.querySelector('.popup__description').classList.add('hidden');
  }
  if (photos) {
    cardElement.querySelector('.popup__photo').src = photos;
  } else {
    cardElement.querySelector('.popup__photo').classList.add('hidden');
  }
  if (avatar) {
    cardElement.querySelector('.popup__avatar').src = avatar;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  return cardElement;
};

export { fullOfferContent }
