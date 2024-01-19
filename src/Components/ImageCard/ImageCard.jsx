import './ImageCard.css';

export const ImageCard=()=>{
    return(
        <div className='image-card-container d-flex direction-column align-center no-border'>
            <div className='image-container'>
                <img className='card-image border-radius-m' src='../wallpapers/wallpaper1.jpg'/>
                <div className='card-image-tag-container d-flex direction-row space-between'>
                    <span className='card-image-tag'>yellow</span>
                    <span className='card-image-tag'>yellow</span>  
                    <span className='card-image-tag'>yellow</span>
                    
                </div>
            </div>
        </div>
    )
}