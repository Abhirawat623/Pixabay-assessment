import { useParams } from "react-router-dom";
import "./HorizontalImageCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchedImage } from "../../Context/index";
import React from "react";
import {
  Panel,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from "reactflow";
import { toPng } from "html-to-image";
export const HorizontalImageCard = () => {
  //using param for id
  const { _id } = useParams();
  //for single image card
  const [singleImage, setSingleImage] = useState({});
  //fetching ap by id
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&id=${_id}`
        );
        setSingleImage(data.hits[0]);
        console.log(singleImage);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [singleImage]);
  //single image modal close
  const { searchedImageDispatch } = useSearchedImage();
  const handleCloseSingleImageModal = () => {
    searchedImageDispatch({
      type: "SINGLE_IMAGE_MODAL",
    });
  };
  //params from api
  const {
    largeImageURL,
    downloads,
    likes,
    views,
    user_id,
    user,
    type,
    webformatURL,
  } = singleImage;

  //downloader
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="horizontal-image-card-container d-flex direction-column align-center">
      <header className="horizontal-image-card-header d-flex direction-row">
        <h2 className="primary-text text-m ">Preview ID:{_id}</h2>
        <span id="close-icon">
          <span
            className="material-symbols-outlined cursor"
            onClick={handleCloseSingleImageModal}
          >
            close
          </span>
        </span>
      </header>
      <main
        className="horizontal-image-card-main d-flex direction-row align-center 
         padding-m border-radius-m gap-xl"
      >
        <img
          className="horizontal-image-card-image border-radius-m"
          src={largeImageURL}
        />
        <aside className="horizontal-image-card-aside-container gap-l">
          <div className="horizontal-image-card-download d-flex direction-column gap-s">
            <h2 className="secondarytext text-m">Download</h2>
            <div className="download-container d-flex direction-column gap-s secondary-text text-s">
              <div className="download-small-container d-flex direction-row space-between ">
                <div className="download-small accent-text">Small</div>
                <label className="download-small-para">640 &times; 960</label>
                <input
                  type="radio"
                  id="small"
                  name="download-small"
                  value="small"
                />
              </div>
              <div className="download-medium-container d-flex direction-row space-between">
                <div className="download-medium accent-text">Medium</div>
                <label className="download-medium-para">1920 &times; 2660</label>
                <input
                  type="radio"
                  id="medium"
                  name="download-medium"
                  value="medium"
                />
              </div>

              <div className="download-large-container d-flex direction-row space-between">
                <div className="download-large accent-text">Large</div>
                <label className="download-large-para">2400 &times; 3600</label>
                <input 
                  type="radio"
                  id="large"
                  name="download-large"
                  value="large"
                />
              </div>

              <div className="download-original-container d-flex direction-row space-between">
                <div className="download-original accent-text">Original</div>
                <label
                  className="download-original-para"
                  href={webformatURL}
                  download
                >
                  2900*4655
                </label>
                <input
                  type="radio"
                  id="original"
                  name="download-original"
                  value="original"
                />
              </div>
            </div>
            <button className="download-btn primary-text text-s no-border border-radius-s">
              <a href={webformatURL} download onClick={(e) => download(e)}>
                Download for free!
              </a>
            </button>
          </div>
          <div className="horizontal-image-card-information ">
            <h2 className="secondary-text text-m ">Information</h2>
            <div className="horizontal-image-info gap-m secondary-text text-s">
              <div className="user d-flex gap-s direction-column">
                <h4 className="accent-text">User</h4>
                <span className="bold-text">{user}</span>
              </div>

              <div className="user_id d-flex gap-s direction-column">
                <h4 className="accent-text">User_Id</h4>
                <span className="bold-text">{user_id}</span>
              </div>

              <div className="type_id d-flex gap-s direction-column">
                <h4 className="accent-text">Type</h4>
                <span className="bold-text">{type}</span>
              </div>

              <div className="views d-flex gap-s direction-column">
                <h4 className="accent-text">Views</h4>
                <span className="bold-text">{views}</span>
              </div>

              <div className="downloads d-flex gap-s direction-column">
                <h4 className="accent-text">Downloads</h4>
                <span className="bold-text">{downloads}</span>
              </div>

              <div className="likes d-flex gap-s direction-column">
                <h4 className="accent-text">Likes</h4>
                <span className="bold-text">{likes}</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <footer className="horizontal-image-card-footer">
        <div className="card-image-tags d-flex direction-row gap-s padding-s secondary-text text-s"></div>
      </footer>
    </div>
  );
};
