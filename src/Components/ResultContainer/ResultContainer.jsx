import "./ResultContainer.css";
import { ImageCard } from "../index";
import { useEffect, useState } from "react";
import axios from "axios";
export const ResultContainer = () => {
  //fetching searched images from api
  const [searchedImages, setSearchedImages] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d"
        );
        setSearchedImages(data.hits);
        console.log(searchedImages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <main className="searched-images-container">
      {searchedImages.map((searchedImage) => (
        <ImageCard key={searchedImage.id} items={searchedImage} />
      ))}
    </main>
  );
};
