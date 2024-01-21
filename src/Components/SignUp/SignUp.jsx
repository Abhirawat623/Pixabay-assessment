import "./SignUp.css";
import {signupHandler} from "../../services/index"
import { useAuth,useAlert} from "../../Context/index";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils/index";


let isNameValid,
isPasswordValid,
isNumberValid,
isEmailValid,
isConfirmPasswordValid;

export const SignUp = () => {

  const navigate= useNavigate();
const {setAlert} = useAlert()
  const { email, password, username, number, confirmPassword, authDispatch } =
    useAuth();

 

  const handlePasswordSignupChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleNameSignupChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      authDispatch({
        type: "USERNAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };
  const handleMobileSignupChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Mobile Number");
    }
  };
  const handleEmailSignupChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid E-Mail");
    }
  };
  const handleConfirmPasswordSignupChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);

    if (isConfirmPasswordValid) {
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Confirm Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, email, number,confirmPassword);

    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      signupHandler(username, number, email, password,setAlert);
    }
    else{
      alert("Please fill the form properly")
    }
    authDispatch({
      type: "CLEAR_SIGNUP",
    });
    navigate("/auth/login")
    
  };
  //for signup modal close
  const handleSignupModalClose=()=>{
    authDispatch({
      type:"SIGNUP_MODAL"
    })
  }
 
//for regex checking, may look at console as i have taken onchange as parameter for better accuracy.
  return (
      <div className=" auth-container">
          {/* taking container for both login and signup for better ui as auth-container */}
          <span id='close-icon'><span className="material-symbols-outlined cursor"
           onClick={handleSignupModalClose} 
        >close</span></span>
        <div className="auth-comp d-flex justify-center direction-column align-center">
          <form
            onSubmit={handleFormSubmit}
            className="d-flex direction-column  align-center"
          >
            <span className="auth-signup-background">
              <div className="auth-form">
                <div className="auth-form">
                  <label className="form-label text-s ml-l cursor">Name*</label>
                  <input
                    className="input-form"
                    placeholder="Enter Full Name"
                    required
                    defaultValue={username}
                    onChange={handleNameSignupChange}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label text-s ml-l" cursor>E-mail*</label>
                  <input
                    className="input-form"
                    placeholder="Enter a valid E-mail"
                    required
                    defaultValue={email}
                    onChange={handleEmailSignupChange}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label text-s ml-l">
                    Password*
                  </label>
                  <input
                    className="input-form"
                    placeholder="Must be 8 letters including caps letter & special character"
                    required
                    type="password"
                    onChange={handlePasswordSignupChange}
                    defaultValue={password}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label text-s ml-l cursor">
                    Confirm Password*
                  </label>
                  <input
                    className="input-form"
                    placeholder="Must be 8 letters including caps latter & special character"
                    required
                    type="password"
                    onChange={handleConfirmPasswordSignupChange}
                    defaultValue={confirmPassword}
                  />
                </div>
                <label className="form-label text-s cursor ">
                  Mobile Number*
                </label>
                <input
                  className="input-form"
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  required
                  defaultValue={number}
                  onChange={handleMobileSignupChange}
                />
              </div>
            </span>
            <button className="auth-login-btn test-btn log-btn text-s cursor">Create Account</button>
          </form>
        </div>
      </div>
  );
};
