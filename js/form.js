const adForm = document.querySelector('.ad-form');
const inputPrice = adForm.querySelector('#price');
const typeHouse = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const inputTitle = adForm.querySelector('#title');
const selectRoom = adForm.querySelector('#room_number');
const selectCapacity = adForm.querySelector('#capacity');
const itemSelectCapacity = selectCapacity.querySelectorAll('option');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_COUNT = 1000000;

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

const ROOMS_TO_AVAILABLE_GUESTS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const priceTypeHouse = () => {
  typeHouse.addEventListener('change', (evt) => {
    const sectedItem = priceArr.find((el) => el.type === evt.target.value)
    inputPrice.setAttribute('min', sectedItem.minValue);
    inputPrice.setAttribute('placeholder', sectedItem.placeholder);
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


const chekInCheckoutRoomCapacity = () => {
  selectRoom.addEventListener('change', (evt) => {
    const guestsNumberAvailable = ROOMS_TO_AVAILABLE_GUESTS[evt.target.value];
    itemSelectCapacity.forEach((item) => {
      const idx = guestsNumberAvailable.indexOf(item.value);
      item.disabled = idx === -1;
      item.selected = idx !== -1;
    });
    selectCapacity.disabled = false;
  })
};

const validTitleInput = () => {
  inputTitle.addEventListener('input', () => {
    const valueLength = inputTitle.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      inputTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
      event.preventDefault();
    } else if (valueLength > MAX_TITLE_LENGTH) {
      inputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
      event.preventDefault();
    } else {
      inputTitle.setCustomValidity('');
    }
    inputTitle.reportValidity();
  });
};

const validPriceInput = () => {
  inputPrice.addEventListener('input', () => {
    const inputValue = Number(inputPrice.value);
    if (inputValue > MAX_PRICE_COUNT) {
      inputPrice.setCustomValidity('Стоимость не должна превышать 1 000 000');
      event.preventDefault();
    } else if (inputValue < 0) {
      inputPrice.setCustomValidity('Число должно быть положительным');
      event.preventDefault();
    } else {
      inputPrice.setCustomValidity('');
    }
    inputPrice.reportValidity();
  });
}



export { priceTypeHouse, chekInCheckOutTime, validTitleInput, validPriceInput, chekInCheckoutRoomCapacity }
