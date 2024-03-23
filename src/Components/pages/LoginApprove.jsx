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

  useEffect(() => {
    if (isAuthenticated) navigate("/approve", { replace: true });
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    login(data.email, data.password, "approve");
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
              htmlFor="name-approve"
              className="form-login__input--name lalezar-regular"
            >
              Your email
            </label>
            <input
              id="name-approve"
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
          </div>

          <div className="form-group">
            <label
              htmlFor="password-approve"
              className="form-login__input--password lalezar-regular"
            >
              Your password
            </label>
            <input
              id="password-approve"
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
