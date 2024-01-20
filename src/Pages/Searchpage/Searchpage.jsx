import './Searchpage.css';
import {wallpaper} from '../../assets/wallpaper';
import {Navbar,Searchbar,ResultContainer,HorizontalImageCard} from '../../Components/index';

export const Searchpage=()=>{
        
    //for random wallpaper for searchpage
        const index= Math.floor(Math.random()*(wallpaper.length-1));
        const randomWallpaper=wallpaper[index].thumbnail;
    return(
<main className="display-wallpaper d-flex direction-column align-center gap-l"
 style={{backgroundImage:`url("${randomWallpaper}")`}}>
  <Navbar/>
  <Searchbar/>
  <ResultContainer/>
  <HorizontalImageCard/>

  </main>
    )
}