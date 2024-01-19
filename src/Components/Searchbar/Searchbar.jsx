import "./Searchbar.css";

export const Searchbar = () => {
  return (
   <div className="searchbar-container d-grid border-radius-m primary-text text-s padding-s ">
    
    <span id='search-icon'><span class="material-symbols-outlined ">search</span></span>
    <input className='searchbar-input primary-text text-s padding-s' type='text' placeholder="search..."></input>
   <button className=" go-btn primary-text no-borer border-radius-l text-s">Go</button>    
    </div>
  );
};
