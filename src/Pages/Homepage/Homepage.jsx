import './Homepage.css'
import {images} from '../../assets/images';
import {Navbar,Searchbar} from '../../Components/index';
export const Homepage =()=>{
    //for random wallpaper
    const index= Math.floor(Math.random()*(images.length-1));
    const randomWallpaper=images[index].thumbnail;
    return(

    <>
    <main className="wallpaper" style={{backgroundImage:`url("${randomWallpaper}")`}}>
  <Navbar/>
  <Searchbar/>
  </main></>
    )

}