import React from "react";
import { BiSearch, BiCaretDown } from "react-icons/bi";
import DropDown from "./DropDown";

import { SEARCH } from "./../international";


const Search = () => {
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value=""
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <buttton
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white"
            >
              {SEARCH.text} <BiCaretDown className="ml-2" />
            </buttton>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
