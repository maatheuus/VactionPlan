import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";

import { AuthContext } from "../context/authUser-context";
import Button from "../Button";
import Login from "../Login";
import image from "../../assets/images/buzzel-logo.png";

function LoginEmployee() {
  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/requests", { replace: true });
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    login(data.email, data.password, "employee");
  };

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
          <div className="form-group">
            <label
              htmlFor="email-employee"
              className="form-login__input--name lalezar-regular"
            >
              Your Email
            </label>
            <input
              id="email-employee"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
              })}
            />
            <p className="error-inputs">{errors?.email?.message}</p>
          </div>

          <div className="form-group">
            <label
              htmlFor="password-employee"
              className="form-login__input--password lalezar-regular"
            >
              Your Password
            </label>
            <input
              id="password-employee"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter your password",
                },
              })}
            />
            <p className="error-inputs">{errors?.password?.message}</p>
          </div>
        </div>

        <div className="form-login__button ">
          <Button
            className="form-submit btn-primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Login
          </Button>
          ;
          <Link to="/singUp">
            <Button className="form-submit btn-primary">Sing Up</Button>
          </Link>
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
