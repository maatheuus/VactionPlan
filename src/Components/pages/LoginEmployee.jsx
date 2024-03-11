import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../Button";
import Input from "../Input";
import image from "../../assets/images/buzzel-logo-img.png";

function LoginEmployee() {
  const back = useNavigate();

  return (
    <>
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
          <Button className="form-submit" id="button">
            <Link to="/singUp">Sing Up</Link>
          </Button>
        </div>
      </form>
    </>
  );
}

export default LoginEmployee;
