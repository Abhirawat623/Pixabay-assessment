import './Navbar.css';

export const Navbar =()=>{
    return(
        <nav className='navbar-container d-flex direction-row padding-m 
        space-between border-radius-m primary-text text-s align-center'>
            <h3>Homepage</h3>
            <div className='d-flex direction-row align-center  gap-m'>
                <h3 className='login-btn text-s no-border'> Login</h3>
                <button  className='create-acc-btn primary-text no-borer border-radius-l text-s
               '> Create Account</button>
            </div>
        </nav>
    )
}
