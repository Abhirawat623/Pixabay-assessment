import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/index";
export const Navbar = () => {
  const { accessToken,authDispatch } = useAuth();
  console.log({accessToken});
  //for login modal
  const handleLoginModalClick = () => {
    authDispatch({
      type: "LOGIN_MODAL",
    });
  };
  //for signup modal
  //for signup modal open
  const handleSignupmodalopen = () => {
    authDispatch({
      type: "SIGNUP_MODAL",
    });
  };
  return (
    <nav
      className="navbar-container d-flex direction-row padding-m 
        space-between border-radius-m primary-text text-s align-center"
    >
      <Link to="/" className="homepage-text">
        <h3>Homepage</h3>
      </Link>

{accessToken ?
(<div className="d-flex direction-row align-center  gap-m">
<Link to="/login" onClick={handleLoginModalClick}>
  <h3 className="login-btn text-s no-border">
    <span id='logout-icon'><span class="material-symbols-outlined cursor">
logout
</span></span>
  </h3>
</Link>
<Link to="/signup" onClick={handleSignupmodalopen}>
  <button
    className="create-acc-btn primary-text no-borer border-radius-l text-s "
  >
    username
  </button>
</Link>
</div>) :
(<div className="d-flex direction-row align-center  gap-m">
<Link to="/login" onClick={handleLoginModalClick}>
  <h3 className="login-btn text-s no-border"> Login</h3>
</Link>
<Link to="/signup" onClick={handleSignupmodalopen}>
  <button
    className="create-acc-btn primary-text no-borer border-radius-l text-s "
  >
    Create Account
  </button>
</Link>
</div>)}

    </nav>
  );
};
