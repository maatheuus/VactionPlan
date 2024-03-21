import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authUser-context";
import { FaArrowLeft } from "react-icons/fa";

import Login from "../Login";
import Button from "../Button";
import image from "../../assets/images/buzzel-logo.png";

function LoginApprove() {
  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailApprove = "boss@example.com";
  const passwordApprove = "boss1234";

  const onSubmit = (data) => {
    login(data.email, data.password, "approve");
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/approve", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <Login>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>

      <div className="logo-login">
        <img src={image} alt="logo of the page" />
      </div>
      <form className="form-login login">
        <h1 className=" login__title">Login</h1>
        <div className="form-login__input">
          <label className="form-login__input--name">Your email</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email address",
              },
              validate: (email) => {
                if (email !== emailApprove)
                  return "Provided email are incorrect";
              },
            })}
          />

          <p className="error-inputs">{errors?.email?.message}</p>

          <label className="form-login__input--password">Your password</label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Please enter your password",
              },
              validate: (password) => {
                if (password !== passwordApprove)
                  return "Provided password are incorrect";
              },
            })}
          />
          <p className="error-inputs">{errors?.password?.message}</p>
        </div>
        <div className="form-login__button">
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            className="form-submit btn-primary"
          >
            Login
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginApprove;
