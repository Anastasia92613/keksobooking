const price = document.querySelector('#price');
const typeHouse = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const priceArr = [
  {
    type: 'flat',
    minValue: '1000',
    placeholder: '1000',
  },
  {
    type: 'bungalow',
    minValue: '0',
    placeholder: '0',
  }, {
    type: 'house',
    minValue: '5000',
    placeholder: '5000',
  }, {
    type: 'palace',
    minValue: '10 000',
    placeholder: '10 000',
  },
];

const priceTypeHouse = () => {
  typeHouse.addEventListener('change', (evt) => {
    const sectedItem = priceArr.find((el) => el.type === evt.target.value)
    price.setAttribute('min', sectedItem.minValue);
    price.setAttribute('placeholder', sectedItem.placeholder);
  })
};


const chekInCheckOutTime = () => {
  timeIn.addEventListener('change', () => {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', () => {
    timeIn.value = timeOut.value;
  });
};

export { priceTypeHouse, chekInCheckOutTime }
