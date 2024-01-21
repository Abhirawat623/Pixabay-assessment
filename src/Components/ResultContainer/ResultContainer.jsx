import "./ResultContainer.css";
import { ImageCard, Categories } from "../index";
import { Fragment, useEffect, useState } from "react";
import { useSearchedImage } from "../../Context/index";
import axios from "axios";
export const ResultContainer = () => {
  //for searched value
  const searchedValue = localStorage.getItem("searchedValue");

  // fetching searched images from api
  const [searchedImages, setSearchedImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&q=${searchedValue}}`
        );
        setSearchedImages(data.hits);
        console.log(searchedImages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchedValue]);

  //fetching searched images (categories) from api

  const { imageCat } = useSearchedImage();
  console.log(imageCat);
  const [catImages, setCatImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&category=${imageCat}`
        );
        setCatImages(data.hits);
        console.log(catImages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [imageCat]);
  return (
    <Fragment>
      <Categories />
      <main className="searched-images-container">
        {searchedImages.map((searchedImage) => (
          <ImageCard key={searchedImage.id} items={searchedImage} />
        ))}

        {catImages.map((catImage) => (
          <ImageCard key={catImage.id} items={catImage} />
        ))}
      </main>
    </Fragment>
  );
};
