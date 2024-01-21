import Carousel from "@itseasy21/react-elastic-carousel";
import "./Categories.css";
import { useSearchedImage } from "../../Context/index";
const data = require("../../assets/categories.json"); // replace with your JSON file path
console.log(data); // do something with the JSON data

export const Categories = () => {
  const { imageCat, searchedImageDispatch } = useSearchedImage();
  //for category click
  // const handleCategoryClick=(event)=>{
  //
  //   })

  const handleCategoryClick = (category) => {
    searchedImageDispatch({
      type: "IMAGE_CATEGORY",
      payload: category,
    });
  };
  return (
    <div className="categories-container  ">
      <Carousel
        className="carousel"
        itemsToShow={6}
        itemPadding={[5, 10]}
        itemsToScroll={5}
        autoPlaySpeed={2500}
      >
        {data &&
          data.map(({ id, category }) => (
            <button
              className="categories-btn primary-text text-s cursor"
              key={id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
      </Carousel>
    </div>
  );
};
