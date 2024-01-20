import './ImageCard.css';

export const ImageCard=({items})=>{

    const {largeImageURL}= items;
    return(
        <div className='image-card-container d-flex direction-column align-center no-border'>
            <div className='image-container ' > 
            <div className="grid js-masonry"
        data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth":200}'>
                <img className='card-image border-radius-m' src={largeImageURL}/>
                </div>
                </div>
            </div>
    )
}