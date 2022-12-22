import React from "react";
import { BiCheck } from "react-icons/bi";
import { DROP_DOWN } from "./../international";

const DropDown = () => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" rol="menu" aria-orientation="vertical">
        <div
          className="px-4 py-2 text-sm text-gray-700 hover_bg-gray-100"
          role="menuitem"
        >
          {DROP_DOWN.input1} <BiCheck />
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover_bg-gray-100"
          role="menuitem"
        >
          {DROP_DOWN.input2} <BiCheck />
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover_bg-gray-100"
          role="menuitem"
        >
          {DROP_DOWN.input3} <BiCheck />
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover_bg-gray-100"
          role="menuitem"
        >
          {DROP_DOWN.input4} <BiCheck />
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover_bg-gray-100"
          role="menuitem"
        >
          {DROP_DOWN.input5} <BiCheck />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
