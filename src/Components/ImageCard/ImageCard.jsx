import "./ImageCard.css";
import { useNavigate } from "react-router-dom";
import { useSearchedImage } from "../../Context/index";
export const ImageCard = ({ items }) => {
  //image searched dispatch
  const { searchedImageDispatch } = useSearchedImage();

  //for navigation
  const navigate = useNavigate();

  //for clicking image

  const handleImagedClicked = () => {
    navigate(`/Search/${id}`);
    searchedImageDispatch({
      type: "SINGLE_IMAGE_MODAL",
    });
  };
  //props passed as items
  const { largeImageURL, id } = items;
  return (
    <div className="image-card-container d-flex direction-column align-center no-border">
      <div className="image-container ">
        <div
          className="grid js-masonry"
          data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth":200}'
        >
          <img
            className="card-image border-radius-m cursor"
            src={largeImageURL}
            onClick={handleImagedClicked}
          />
        </div>
      </div>
    </div>
  );
};
