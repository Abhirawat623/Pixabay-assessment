import './HorizontalImageCard.css';

export const HorizontalImageCard=()=>{

    return(
        <div className='horizontal-image-card-container'>
    <header className='horizontal-image-card-header'>Preview ID:2343</header>
    <main className='horizontal-image-card-main'>
        <img className='horizontal-image-card-image' src='../wallpapers/wallpaper2.jpg'/>
        <aside className='horizontal-image-card-aside-container d-flex direction-column'>
            <div className='horizontal-image-card-download'></div>
            <div className='horizontal-image-card-information'></div>
        </aside>
    </main>
    <footer className='horizontal-image-card-footer'> </footer>
        </div>
    )
}