import './ImageCard.css';

export const ImageCard=({items})=>{

    const {largeImageURL}= items;
    return(
        <div className='image-card-container d-flex direction-column align-center no-border'>
            <div className='image-container'>
                <img className='card-image border-radius-m' src={largeImageURL}/>
              
                </div>
            </div>
    )
}