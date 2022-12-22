import React from "react";
import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import { APP } from "./international";

function App() {
  return (
    <div className="container mx-auto mt-3 font-thin">
      <h1 className="txt-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />
        {APP.title}
      </h1>
      <Search />
    </div>
  );
}

export default App;
