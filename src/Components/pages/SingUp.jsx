import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../Button";
import Input from "../Input";

function SingUp() {
  const back = useNavigate();

  return (
    <>
      <Button onClick={() => back(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>
      <h1 className="singUp-title">Sing Up</h1>

      <form className="form-login__singUp login">
        <div className="form-login__input">
          <Input className="form-login__input--name" label="Name" type="text" />
          <Input
            className="form-login__input--password"
            label="UserName"
            type="text"
          />
          <Input
            className="form-login__input--password"
            label="Email"
            type="email"
          />
          <Input
            className="form-login__input--password"
            label="Password"
            type="password"
          />
          <Input
            className="form-login__input--password"
            label="Confirm Password"
            type="password"
          />
        </div>
        <div className="form-login__button">
          <Button className="form-submit" id="button">
            Sing Up
          </Button>
        </div>
      </form>
    </>
  );
}

export default SingUp;
