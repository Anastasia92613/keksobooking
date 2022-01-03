const price = document.querySelector('#price');
const typeHouse = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

price.setAttribute('min', '1000');
price.setAttribute('placeholder', '1000');

typeHouse.addEventListener('change', () => {
  switch(typeHouse.value){
    case 'flat':
      price.setAttribute('min', '1000');
      price.setAttribute('placeholder', '1000');
      break;
    case 'bungalow':
      price.setAttribute('min', '0');
      price.setAttribute('placeholder', '0');
      break;
    case 'house':
      price.setAttribute('min', '5000');
      price.setAttribute('placeholder', '5000');
      break;
    case 'palace':
      price.setAttribute('min', '10 000');
      price.setAttribute('placeholder', '10 000');
      break;
  }
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
