import { Link } from "react-router-dom";

import Button from "../Button";
import image from "../../assets/images/buzzel-logo-img.png";

function ChoseLogin() {
  return (
    <>
      <div className="logo-login">
        <img src={image} alt="logo of the page" />
      </div>
      <div className="chose-login login">
        <h1 className="chose-login__title login__title">
          Chose one to Sing in
        </h1>
        <div className="chose-login__button login__button">
          <Button className="chose-login__button--aprove" id="button">
            <Link to="/loginApprove">Approve</Link>
          </Button>

          <Button className="chose-login__button--employee" id="button">
            <Link to="/loginEmployee">Employee</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChoseLogin;
