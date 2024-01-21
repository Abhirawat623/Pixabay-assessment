import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/index";
export const Navbar = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  //for login modal
  const handleLoginModalClick = () => {
    authDispatch({
      type: "LOGIN_MODAL",
    });
  };
  //for token from local storage
  const token = localStorage.getItem("token");
  //for signup modal open
  const handleSignupmodalopen = () => {
    authDispatch({
      type: "SIGNUP_MODAL",
    });
  };
  //for logout
  const handleLogoutClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <nav
      className="navbar-container d-flex direction-row padding-m 
        space-between border-radius-m primary-text text-s align-center"
    >
      <Link to="/" className="homepage-text">
        <h3>Homepage</h3>
      </Link>

      {token ? (
        <div className="d-flex direction-row align-center  gap-m">
          <Link to="/signup" onClick={handleLogoutClick}>
            <button className="create-acc-btn primary-text no-borer border-radius-l text-s cursor">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="d-flex direction-row align-center  gap-m">
          <Link to="/login" className="login-btn" onClick={handleLoginModalClick}>
            <h3 className=" text-s no-border">Login</h3>
          </Link>
          <Link to="/signup" onClick={handleSignupmodalopen}>
            <button className="create-acc-btn primary-text no-borer border-radius-l text-s ">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
