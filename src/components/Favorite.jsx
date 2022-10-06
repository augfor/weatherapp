import { handleDeleteFavorite } from '../utils/handlers';

import { BsTrash } from 'react-icons/bs';

const Favorite = ({ favorite, setCity, favorites, setFavorites }) => {
  return (
    <div className="flex justify-between w-full max-w-[450px] bg-black/20 min-h-[30px] text-white backdrop-blur-[32px] rounded-[32px] py-1 px-6 mt-4">
      <button
        onClick={() => {
          setCity(favorite.value);
        }}
      >
        {favorite.value
          .split(' ')
          .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
          .join(' ')}
      </button>
      <button
        onClick={() => handleDeleteFavorite(favorite.id, favorites, setFavorites)}
        className="bg-[#ff0000] w-6 h-6 rounded-full flex justify-center items-center transition"
      >
        <BsTrash />
      </button>
    </div>
  );
};

export default Favorite;
