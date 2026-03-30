import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
      <form action="">
      <div className="flex space-x-3">
          <label className="input">
          <input type="search" className="grow" placeholder="Search" />
        </label>
        <button>
          <FaSearch />
        </button>
      </div>
      </form>
    </div>
    </div>
  );
};

export default Search;
