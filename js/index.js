import { disableFormMain, initMap } from './map.js';
import { priceTypeHouse, chekInCheckOutTime, validTitleInput, validPriceInput, chekInCheckoutRoomCapacity } from './form.js';


window.onload = () => {
  disableFormMain();
  initMap();
  validTitleInput();
  validPriceInput();
  chekInCheckoutRoomCapacity();
  priceTypeHouse();
  chekInCheckOutTime();
}
