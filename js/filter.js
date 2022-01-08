import { getOffers } from './api.js';
import { redrawMap } from './map.js';
const mapFilter = document.querySelector('.map__filters');

//создаем объект выбранных фильтров
let filters = {
  housingType: 'any',
  housingPrice: 'any',
  housingRoom: 'any',
  housingCapacity : 'any',
  features: [],
}
//собираем массив выбранных фильтров из формы
const addHandlerToForm = () => {
  mapFilter.addEventListener('change', async (event) => {
    if(event.target.name === 'housing-type'){
      filters.housingType = event.target.value;
    }

    if(event.target.name === 'housing-price'){
      filters.housingPrice = event.target.value;
    }

    if(event.target.name === 'housing-rooms'){
      filters.housingRoom = event.target.value;
    }

    if(event.target.name === 'housing-guests'){
      filters.housingCapacity = event.target.value;
    }
    if(event.target.name === 'features'){

      if(filters.features.includes(event.target.value)){
        filters.features = filters.features.filter(el => el !== event.target.value)
      } else {
        filters.features = [...filters.features, event.target.value]
      }
    }

    const filterOffers = await getFilteredOffers(); //сохраняем в переменную результат отфильтрованных объектов

    redrawMap(filterOffers);    //  отрисовываем объекты
  });

};
//приводим выбранный диапазон к значению в объекте
const getLevelHousingPrice = (value) => {
  if(_.inRange(value, 10000, 50001)){
    return 'middle';
  }

  if(_.inRange(value, 0, 10001)){
    return 'low';
  }

  if(value > 50000){
    return 'hight';
  }

  return 'any';
};

//проверка на соответсвие выбранному фильтру, возвращаем true или false
const filterHousingType = (offer) => {
  return offer.type === filters.housingType || filters.housingType === 'any';
};

//проверка на соответсвие выбранному фильтру, возвращаем true или false
const filterHousingPrice = (offer) => {
  return getLevelHousingPrice(offer.price) === filters.housingPrice || filters.housingPrice === 'any';
};

//проверка на соответсвие выбранному фильтру, возвращаем true или false
const filterHousingRoom = (offer) => {
  return filters.housingRoom === 'any' || offer.rooms === Number(filters.housingRoom);
};

//проверка на соответсвие выбранному фильтру, возвращаем true или false
const filterHousingCapacity = (offer) => {
  return filters.housingCapacity === 'any' || offer.guests === Number(filters.housingCapacity);
};

//проверка на соответсвие выбранному фильтру, возвращаем true или false
const filterHousingFeatures = (offer) => {
  return !filters.features.length || _.intersection(filters.features, offer.features).length > 0 ;
};

//сохраняем значения проверки в массив
const filterArr = [filterHousingType, filterHousingPrice, filterHousingRoom, filterHousingCapacity, filterHousingFeatures ];

//берем массив со значениями проверки и с помощью every прговеряем каждый элемент объекта на соотвествие
const filtrate = (offer) => {
  return filterArr.every(el => {
    return el(offer.offer);
  });

};

//создаем запрос к серверу для получения объектов и вызываем функцию проверки на соотвествие
const getFilteredOffers = async () => {
  const offers = await getOffers();
  return offers.filter(offer => {
    return filtrate(offer);
  });
};

export { addHandlerToForm }
