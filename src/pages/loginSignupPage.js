import { useState } from "react";
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";
import { AuthContainer } from "./styles/loginSignupPage.styles";

const LoginSignupPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const handleClick = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <AuthContainer isLoginVisible={isLoginVisible}>
      <LogIn handleClick={handleClick} />
      <SignUp handleClick={handleClick} />
    </AuthContainer>
  );
};

export default LoginSignupPage;
