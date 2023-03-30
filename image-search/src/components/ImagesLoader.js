import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ImagesLoader.css";

const ImagesLoader = (searchImage) => {
  const [images, setImages] = useState([]);

  const searchedImage = searchImage.searchImage;

  //   console.log(searchedImage.length);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.unsplash.com/photos?client_id=XKOL0mtrOsVwum77sPqjIcTPGyRIO8IVJYcx9xiIIpM"
        )
        .then((data) => {
          //   console.log(data);
          setImages(data.data);
        });
    };
    fetchData();
  }, []);

  console.log(images);

  return (
    <div className="Full-Image">
      <div className="grid">
        {searchedImage.length !== 0
          ? searchedImage.map((image) => {
              return (
                <div className="Image-container">
                  <div className="boxes">
                    <div key={image.id} className="imageHolder">
                      <img src={image.urls.thumb} alt={image.alt_description} />
                    </div>
                  </div>
                </div>
              );
            })
          : images.map((image) => {
              return (
                <div className="Image-container">
                  <div className="boxes">
                    <div key={image.id} className="imageHolder">
                      <img src={image.urls.thumb} alt={image.alt_description} />
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ImagesLoader;
