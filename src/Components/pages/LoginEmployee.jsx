import { Link, useNavigate, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../Button";
import Input from "../Input";
import image from "../../assets/images/buzzel-logo.png";
import Login from "../Login";

function LoginEmployee() {
  const back = useNavigate();

  return (
    <Login>
      <Outlet />

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
          <Link to="./screen">
            <Button className="form-submit" id="button">
              Login
            </Button>
          </Link>
          ;
          <Link to="/singUp">
            <Button className="form-submit" id="button">
              Sing Up
            </Button>
          </Link>
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
