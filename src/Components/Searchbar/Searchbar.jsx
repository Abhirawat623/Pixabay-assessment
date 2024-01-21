import "./Searchbar.css";
import { Link } from "react-router-dom";
import { useSearchedImage } from "../../Context/index";
export const Searchbar = () => {
  //for search
  const { searchedValue, searchedImageDispatch } = useSearchedImage();

  const handleSearchedImage = (event) => {
    searchedImageDispatch({
      type: "SEARCHED_VALUE",
      payload: event.target.value,
    });
    localStorage.setItem("searchedValue", searchedValue);
    console.log(searchedValue);
  };

  //submitting value
  // const handleToSubmit=(event)=>{
  //   if(event.key==="Enter" && event.target.value.length>0){
  //     localStorage.removeItem("searchedValue")
  // }}

  return (
    <div className="searchbar-container d-grid border-radius-m primary-text text-s padding-s">
      <span id="search-icon">
        <span className="material-symbols-outlined ">search</span>
      </span>
      <input
        className="searchbar-input primary-text text-s padding-s"
        type="text"
        placeholder="search..."
        value={searchedValue}
        onChange={handleSearchedImage}
      />
      <Link to="/search">
        <button className=" go-btn primary-text no-borer border-radius-l text-s cursor">
          Go
        </button>{" "}
      </Link>
    </div>
  );
};
