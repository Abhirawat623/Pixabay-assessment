import './Homepage.css'
import {wallpaper} from '../../assets/wallpaper';
import {Navbar,Searchbar} from '../../Components/index';
export const Homepage =()=>{
    //for random wallpaper
    const index= Math.floor(Math.random()*(wallpaper.length-1));
    const randomWallpaper=wallpaper[index].thumbnail;
    return(

    
    <main className="display-wallpaper d-flex direction-column align-center " style={{backgroundImage:`url("${randomWallpaper}")`}}>
  <Navbar/>
  
  <h1 className='display-text-top primary-text relative text-xl'>Discover over 2,000,000</h1> 
    <h1 className='display-text-bottom primary-text text-xl relative'>free Stock Images</h1>
  <Searchbar/>
  </main>
    )

}