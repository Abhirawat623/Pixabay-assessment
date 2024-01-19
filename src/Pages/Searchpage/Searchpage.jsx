import './Searchpage.css';
import {images} from '../../assets/images';
import {Navbar,Searchbar} from '../../Components/index';
export const Searchpage=()=>{
        //for random wallpaper for searchpage
        const index= Math.floor(Math.random()*(images.length-1));
        const randomWallpaper=images[index].thumbnail;
    return(
<main className="display-wallpaper " style={{backgroundImage:`url("${randomWallpaper}")`}}>
  <Navbar/>
  
  <h1 className='display-text-top primary-text relative text-xl'>Discover over 2,000,000</h1> 
    <h1 className='display-text-bottom primary-text text-xl relative'>free Stock Images</h1>
  <Searchbar/>
  </main>
    )
}