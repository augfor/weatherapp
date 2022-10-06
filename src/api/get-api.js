import axios from 'axios';

export const fetchIp = (setIp) => {
  fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((data) => setIp(data.ip));
};

export const fetchCurrentCity = (ip, setCurrentCity) => {
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_WEATHER_RAPIDAPI_URL,
    params: { q: ip },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_RAPIDAPI_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setCurrentCity(response.data.city);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const fetchCity = (setData, city, setLoading, setError) => {
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_WEATHER_RAPIDAPI_URL2,
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_RAPIDAPI_HOST,
    },
  };

  setLoading(true);

  axios
    .request(options)
    .then(function (response) {
      setLoading(false);
      setData(response.data);
    })
    .catch(function (error) {
      console.error(error);

      setError(error);
    });
};

export const checkCityTemperature = (city, temperature) => {
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_WEATHER_RAPIDAPI_URL2,
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_RAPIDAPI_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(Math.round(response.data.current.temp_c) === temperature);

      const cityName = `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;

      return Math.round(response.data.current.temp_c) === temperature
        ? console.log(`${cityName} hasn't changed its temperature`)
        : Math.round(response.data.current.temp_c) > temperature
        ? alert(`${cityName} is hotter than when we last checked`)
        : alert(`${cityName} is cooler than when we last checked`);
    })
    .catch(function (error) {
      console.error(error);
    });
};
