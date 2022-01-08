import { formDisabled, formActive } from './util.js';
import { fullOfferContent } from './similar-elements.js';
import { getOffers } from './api.js';
const LAT_TOKIO = 35.6895;
const LNG_TOKIO = 139.692;
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFormElements = mapFilters.children;
const inputAdress = adForm.querySelector('#address');

const disableFormMain = () => {
  formDisabled(adForm, adFormElements);
  formDisabled(mapFilters, mapFormElements);
};

const enableFormMain =() => {
  formActive(adForm, adFormElements);
  formActive(mapFilters, mapFormElements);
};

const getStartingCoordinats = () => inputAdress.value = `lat: ${LAT_TOKIO}, lng: ${LNG_TOKIO},`;
const map = L.map('map-canvas')


const initMap = async () => {
  const offers = await getOffers();
  map
    .on('load', () => {
      enableFormMain();
      getStartingCoordinats();
    })

    .setView({
      lat: LAT_TOKIO,
      lng: LNG_TOKIO,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: LAT_TOKIO,
      lng: LNG_TOKIO,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const address = evt.target.getLatLng();
    inputAdress.value = `lat: ${address.lat.toFixed(5)}, lng: ${address.lng.toFixed(5)}`;
  });


  offers.slice(0, 10)
    .forEach((offer) => {
      const { location: { lat, lng } } = offer;
      const pinIcon = L.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker({
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
      );
      marker
        .addTo(map)
        .bindPopup(
          fullOfferContent(offer),
        );
    });
}

const redrawMap = async (offers) => {
  map.eachLayer((layer) => {
    layer.remove();
  })
  enableFormMain();
  getStartingCoordinats();

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: LAT_TOKIO,
      lng: LNG_TOKIO,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);


  offers.slice(0, 10)
    .forEach((offer) => {
      const { location: { lat, lng } } = offer;
      const pinIcon = L.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker({
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
      );
      marker
        .addTo(map)
        .bindPopup(
          fullOfferContent(offer),
        );
    });
}



export { disableFormMain, initMap, getStartingCoordinats, redrawMap }
