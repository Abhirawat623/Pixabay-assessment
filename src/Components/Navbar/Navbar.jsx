import './Navbar.css';
import { Link } from 'react-router-dom';
export const Navbar =()=>{
    return(
        <nav className='navbar-container d-flex direction-row padding-m 
        space-between border-radius-m primary-text text-s align-center'>
            <Link to="/"  className='homepage-text'><h3>Homepage</h3></Link>
            <div className='d-flex direction-row align-center  gap-m'>
            <Link to='/auth/login'><h3 className='login-btn text-s no-border'> Login</h3></Link>
                <button  className='create-acc-btn primary-text no-borer border-radius-l text-s
               '> Create Account</button>
            </div>
        </nav>
    )
}
