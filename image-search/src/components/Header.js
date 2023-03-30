// XKOL0mtrOsVwum77sPqjIcTPGyRIO8IVJYcx9xiIIpM
// photos-https://api.unsplash.com/photos

import axios from "axios";
import React, { useState } from "react";
import "./Header.css";
import ImagesLoader from "./ImagesLoader";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchImage, setSearchImage] = useState([]);

  const fetchSearchImage = async () => {
    await axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=XKOL0mtrOsVwum77sPqjIcTPGyRIO8IVJYcx9xiIIpM&query=${search}`
      )
      .then((data) => {
        // console.log(data.data.results);
        setSearchImage(data.data.results);
      });
  };

  // console.log(search);
  //   console.log(searchImage);

  return (
    <div>
      <div className="container">
        <header className="header">
          <input
            type="search"
            className="search"
            placeholder="search here..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={() => fetchSearchImage()}>Search</button>
        </header>
      </div>

      <ImagesLoader searchImage={searchImage} />
    </div>
  );
};

export default Header;
