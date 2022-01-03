import { getRandomInt, getRandomFloat, getArrayUniq, getRandomArrayElement } from './util.js';

const TYPE = ['flat', 'palace', 'palace', 'flat', 'house', 'bungalow'];
const CHEKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const MIN_COUNT_AVATAR = 1;
const MAX_COUNT_AVATAR = 8;

const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomInt(MIN_COUNT_AVATAR, MAX_COUNT_AVATAR)}.png`,
  };
};

const createOffer = () => {
  return {
    title: 'Заголовок',
    address: `location.${getRandomInt(1, 100)}, location.${getRandomInt(1, 100)}}`,
    price: getRandomInt(1, 10000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomInt(1, 10),
    guests: getRandomInt(1, 10),
    checkin: getRandomArrayElement(CHEKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getArrayUniq(FEATURES),
    description: 'Описание',
    photos: getRandomArrayElement(PHOTOS),
  };
};

const createLocation = () => {
  return {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
};

const similarAuthor = new Array(10).fill(null).map(()=> createAuthor());
const similarOffer = new Array(10).fill(null).map(()=> createOffer());
const similarLocation = new Array(10).fill(null).map(()=> createLocation());

export { similarAuthor, similarOffer, similarLocation }
