import "./Login.css";
import { Link } from "react-router-dom";
import { Alert } from "../Alert/Alert";
import { validateNumber, validatePassword } from "../../utils/index";
import { loginHandler } from "../../services/index";
import { useAuth, useAlert } from "../../Context/index";
import { useNavigate } from "react-router-dom";
let isNumberValid, isPasswordValid;
export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch, password, number } = useAuth();
  //for alert
  const { alert, setAlert } = useAlert();
  const handleNumberLogin = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Inavlid Number");
    }
  };

  const handlePasswordLogin = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Inavlid Password");
    }
  };
  console.log(number, password);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const { accessToken, username } = await loginHandler(
        number,
        password,
        setAlert
      );
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: username,
      });

      console.log({ accessToken });
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
        authDispatch({
          type: "CLEAR_SIGNUP",
        });
      }
    } else {
      alert("Please Submit Correct Details");
    }
  };

  const handlleTestLoginButton = async (event) => {
    const { accessToken, username } = await loginHandler(
      9123456789,
      "Abcd@123",
      setAlert
    );
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    });
    authDispatch({
      type: "SET_USER_NAME",
      payload: username,
    });
    navigate("/");
    //for closing login modal
    authDispatch({
      type: "LOGIN_MODAL",
    });
  };

  //for login modal close
  const handleLoginModalClose = () => {
    authDispatch({
      type: "LOGIN_MODAL",
    });
  };

  return (
    <div className=" auth-container signup-container">
      {/* taking container for both login and signup for better ui as auth-container */}
      <div className="auth-comp d-flex justify-center direction-column align-center">
        <h2 className=" secondary-text text-l pointer">Login</h2>
        <span id="close-icon">
          <span
            className="material-symbols-outlined cursor"
            onClick={handleLoginModalClose}
          >
            close
          </span>
        </span>
        <form className="d-flex direction-column gap-s align-center">
          <span className="auth-background">
            <div className="auth-form">
              <label className="form-label secondary-text text-m cursor">
                Mobile Number
              </label>
              <input
                className="input-form"
                placeholder="Enter Registered Mobile Number"
                onChange={handleNumberLogin}
                defaultValue={number}
                maxLength={10}
              />
            </div>
            <div className="auth-form">
              <label className="form-label secondary-text cursor text-m ">
                Password
              </label>
              <input
                className="input-form"
                placeholder="*********"
                onChange={handlePasswordLogin}
                defaultValue={password}
                type="password"
              />
            </div>
          </span>
          <div className="cta">
            <button
              className="test-btn log-btn secondary-text text-s cursor"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
        <button
          className="test-btn crd-btn secondary-text text-s cursor"
          onClick={handlleTestLoginButton}
        >
          Login with Test Credentials
        </button>
      </div>
      {alert.open && <Alert />}
    </div>
  );
};
