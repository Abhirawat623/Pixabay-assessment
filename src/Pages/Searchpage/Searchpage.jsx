import './Searchpage.css';
import {wallpaper} from '../../assets/wallpaper';
import {Navbar,Searchbar} from '../../Components/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const Searchpage=()=>{
        
    //for random wallpaper for searchpage
        const index= Math.floor(Math.random()*(wallpaper.length-1));
        const randomWallpaper=wallpaper[index].thumbnail;
    //fetching searched images from api

    const [searchedImages,setSearchedImages]= useState([]);
    useEffect(()=>{
        (async()=>{
            try{
                const{data}= await axios
                .get(`https://pixabay.com/api/?key=41898847-0dd4f5c4dfd622666224d0c7d&q`);
                setSearchedImages(data);
            console.log(searchedImages)}
            catch(error) {console.log(error)}
        })
        ()

    },[])

    return(
<main className="display-wallpaper d-flex direction-column align-center gap-l"
 style={{backgroundImage:`url("${randomWallpaper}")`}}>
  <Navbar/>
  <Searchbar/>
  </main>
    )
}