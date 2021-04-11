import { GOOGLE_API_KEY, OPEN_WEATHER_API_KEY } from './utils/constants';

const openWeatherAPI = ({ latitude, longitude }) => {
  const openWeatherOneEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;

  return fetch(openWeatherOneEndpoint).then(response => response.json());
};

const googleMapsEndpoint = request =>
  `https://maps.googleapis.com/maps/api/geocode/json?${request}&key=${GOOGLE_API_KEY}`;

const getAddressGoogleAPI = ({ latitude, longitude }) => {
  return fetch(googleMapsEndpoint(`latlng=${latitude}, ${longitude}`))
    .then(response => response.json())
    .then(({ plus_code: { global_code } = '' }) => {
      return fetch(
        googleMapsEndpoint(`address=${encodeURIComponent(global_code)}`)
      ).then(response => response.json());
    });
};

export { openWeatherAPI, getAddressGoogleAPI };
