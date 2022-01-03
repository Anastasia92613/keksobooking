// import * as _ from 'lodash';

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

export { getRandomInt, getRandomFloat, getArrayUniq, getRandomArrayElement }
