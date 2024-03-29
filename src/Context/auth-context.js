import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducer/index";

const initialValue = {
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword:"",
  accessToken:"",
  name:"",
  isLoginModalOpen:false,
  isSignUpModalOpen:false
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [{ username, number, password, email,confirmPassword,accessToken,name,
  isLoginModalOpen,isSignUpModalOpen}, authDispatch] = useReducer(
    authReducer,
    initialValue
  );
  return (
    <AuthContext.Provider
      value={{ email, password, number,username,confirmPassword,name,accessToken,
        isLoginModalOpen,isSignUpModalOpen, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
