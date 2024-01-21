import { createContext, useContext, useReducer } from "react";
import { searchedImageReducer } from "../Reducer/index";
const initialValue = {
  isSingleImageModalOpen: false,
  searchedValue:"",
  imageCat:""
};
const SearchedImageContext = createContext(initialValue);
const SearchedImageProvider = ({ children }) => {
  const [{ isSingleImageModalOpen,searchedValue,imageCat }, searchedImageDispatch] = useReducer(
    searchedImageReducer,
    initialValue
  );
  return (
    <SearchedImageContext.Provider
      value={{ isSingleImageModalOpen,searchedValue,imageCat,searchedImageDispatch }}
    >
      {children}
    </SearchedImageContext.Provider>
  );
};

const useSearchedImage = () => useContext(SearchedImageContext);

export { useSearchedImage, SearchedImageProvider };
