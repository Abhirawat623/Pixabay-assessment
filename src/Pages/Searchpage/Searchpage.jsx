import "./Searchpage.css";
import { wallpaper } from "../../assets/wallpaper";
import {
  Navbar,
  Searchbar,
  ResultContainer,
  HorizontalImageCard,
  
} from "../../Components/index";
import { useSearchedImage } from "../../Context/index";
export const Searchpage = () => {
  //for random wallpaper for searchpage
  const index = Math.floor(Math.random());
  const randomWallpaper = wallpaper[index].thumbnail;
  //single image modal
  const { isSingleImageModalOpen } = useSearchedImage();
  console.log(isSingleImageModalOpen);
  return (
    <main
      className="display-wallpaper d-flex direction-column align-center gap-l"
      style={{ backgroundImage: `url("${randomWallpaper}")` }}>
      <Navbar />
      <Searchbar />
     
      <ResultContainer />
      {isSingleImageModalOpen && <HorizontalImageCard />}
    </main>
  );
};
