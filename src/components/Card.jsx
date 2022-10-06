import { handleAddFavorite } from '../utils/handlers';

import { ImSpinner8 } from 'react-icons/im';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs';

const Card = ({ data, city, setFavorites, loading }) => {
  return (
    <div className="w-full max-w-[450px] bg-black/20 min-h-[384px] text-white backdrop-blur-[32px] rounded-[32px] py-6 px-6">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center gap-x-5">
            <div className="text-[87px]">
              <img src={data.current.condition.icon} alt={data.current.condition.text} />
            </div>
            <div>
              <div className="text-3xl font-semibold">
                {city
                  .split(' ')
                  .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
                  .join(' ')}
              </div>
              <div>{data.location.country}</div>
              <div>{data.location.localtime.slice(0, 10)}</div>
            </div>
          </div>
          <div className="my-8">
            <div className="flex justify-center items-center">
              <div className="text-[96px] leading-none font-light">
                {Math.round(data.current.temp_c)}
              </div>
              <div className="text-4xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            <div className="capitalize text-center">{data.current.condition.text}</div>
          </div>
          <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsEye />
                </div>
                <div>
                  Visibility <span className="ml-2">{Math.round(data.current.vis_km)} km</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsThermometer />
                </div>
                <div className="flex">
                  Feels like
                  <div className="flex ml-2">
                    {Math.round(data.current.feelslike_c)}
                    <TbTemperatureCelsius />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsWater />
                </div>
                <div>
                  Humidity
                  <span className="ml-2">{Math.round(data.current.humidity)} %</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsWind />
                </div>
                <div>
                  Wind <span className="ml-2">{Math.round(data.current.wind_kph)} k/h</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              handleAddFavorite(city, setFavorites, {
                temperature: Math.round(data.current.temp_c),
              })
            }
            className="bg-[#ffd700] flex justify-center items-center transition w-full max-w-[450px] min-h-[30px] text-black backdrop-blur-[32px] rounded-[32px] py-1 px-6 mt-6"
          >
            Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
