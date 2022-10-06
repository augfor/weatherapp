import { checkCityTemperature } from '../api/get-api';

export const handleInput = (e, setInputValue) => {
  setInputValue(e.target.value);
};

export const handleSubmit = (e, setCity, inputValue) => {
  if (inputValue !== '') {
    setCity(inputValue);
  }

  e.preventDefault();
};

export const handleAddFavorite = (city, setFavorites, temperature) => {
  const newFavorite = {
    id: Math.floor(Math.random() * 1000),
    value: city,
    temperature: temperature,
  };

  setFavorites((oldFavorites) => [...oldFavorites, newFavorite]);
};

export const handleDeleteFavorite = (id, favorites, setFavorites) => {
  const newFavorites = favorites.filter((favorite) => favorite.id !== id);

  setFavorites(newFavorites);
};

export const handleCheckFavorite = (favorites) => {
  return favorites.map((favorite) => {
    checkCityTemperature(favorite.value, favorite.temperature.temperature);

    console.log(favorite.value);
    console.log(favorite.temperature);
    console.log(favorite.temperature.temperature);
  });
};
