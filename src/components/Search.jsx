import { IoMdSearch } from 'react-icons/io';

import { handleInput, handleSubmit } from '../utils/handlers';

const Search = ({ setCity, inputValue, setInputValue }) => {
  return (
    <form className="h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-4">
      <div className="h-full relative flex items-center justify-between p-2">
        <input
          onChange={(e) => handleInput(e, setInputValue)}
          className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
          type="text"
          placeholder="Search by city"
        />
        <button
          onClick={(e) => handleSubmit(e, setCity, inputValue)}
          className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition"
        >
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </div>
    </form>
  );
};

export default Search;
