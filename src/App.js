import { useEffect, useState } from 'react';

import { ImSpinner8 } from 'react-icons/im';

import Search from './components/Search';
import Card from './components/Card';
import Favorite from './components/Favorite';

import { fetchCity, fetchCurrentCity, fetchIp } from './api/get-api';

import { handleCheckFavorite } from './utils/handlers';

const App = () => {
  const [data, setData] = useState(null);
  const [ip, setIp] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [city, setCity] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCheckFavorite(favorites);
    }, 120000);
    return () => clearTimeout(timer);
  }, [favorites]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
      setCity(currentCity);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentCity, error]);

  useEffect(() => {
    fetchIp(setIp);
    fetchCurrentCity(ip, setCurrentCity);
  }, [ip]);

  useEffect(() => {
    fetchCity(setData, city, setLoading, setError);
  }, [city]);

  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-black" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-slate-600 bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      {error && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">{`${error.response.data.error.message} returning to current city`}</div>
      )}
      <Search setCity={setCity} inputValue={inputValue} setInputValue={setInputValue} />
      <Card data={data} city={city} setFavorites={setFavorites} loading={loading} />
      {favorites.map((favorite, i) => (
        <Favorite
          favorite={favorite}
          key={i}
          setCity={setCity}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default App;
