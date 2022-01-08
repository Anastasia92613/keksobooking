import { disableFormMain, initMap } from './map.js';
import { priceTypeHouse, chekInCheckOutTime, validTitleInput, validPriceInput, chekInCheckoutRoomCapacity, setUserFormSubmit, onButtonReset } from './form.js';
import { showSuccessMessage } from './util.js';
import { addHandlerToForm} from './filter.js';

window.onload = () => {
  disableFormMain();
  initMap();
  addHandlerToForm();
  validTitleInput();
  validPriceInput();
  chekInCheckoutRoomCapacity();
  priceTypeHouse();
  chekInCheckOutTime();
  setUserFormSubmit(showSuccessMessage);
  onButtonReset();

}
