import { Link } from "react-router-dom";

import Login from "../Login";
import Button from "../Button";
import image from "../../assets/images/buzzel-logo.png";

function ChoseLogin() {
  return (
    <Login>
      <div className="logo-login">
        <img src={image} alt="logo of the page" />
      </div>
      <div className="chose-login login">
        <h1 className="chose-login__title login__title">
          Chose one to Sing in
        </h1>
        <div className="chose-login__button login__button">
          <Link to="/loginApprove">
            <Button className="chose-login__button--aprove" id="button">
              Approve
            </Button>
          </Link>

          <Link to="/loginEmployee">
            <Button className="chose-login__button--employee" id="button">
              Employee
            </Button>
          </Link>
        </div>
      </div>
    </Login>
  );
}

export default ChoseLogin;
