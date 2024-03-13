import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../Button";
import Input from "../Input";
import image from "../../assets/images/buzzel-logo.png";
import Login from "../Login";

function LoginApprove() {
  const back = useNavigate();

  return (
    <Login>
      <Button onClick={() => back(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>
      <div className="logo-login">
        <img src={image} alt="logo of the page" />
      </div>
      <form className="form-login login">
        <h1 className=" login__title">Login</h1>
        <div className="form-login__input">
          <Input
            className="form-login__input--name"
            label="UserName"
            type="text"
          />
          <Input
            className="form-login__input--password"
            label="Password"
            type="password"
          />
        </div>
        <div className="form-login__button">
          <Button className="form-submit" id="button">
            Login
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginApprove;
