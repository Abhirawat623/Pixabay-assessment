import './ImageCard.css';
import { useNavigate } from 'react-router-dom';

export const ImageCard=({items})=>{
      const {largeImageURL,id}= items;
    //for navigation
   const navigate= useNavigate();
  
  //for clicking image
 
 const handleImagedClicked =()=>{
    navigate(`/Search/${id}`)
 }

    return(
        <div className='image-card-container d-flex direction-column align-center no-border
        '>
            <div className='image-container ' > 
            <div className="grid js-masonry"
        data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth":200}'>
                <img className='card-image border-radius-m' src={largeImageURL}  onClick={handleImagedClicked}/>
                </div>
                </div>
            </div>
    )
}