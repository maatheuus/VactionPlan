import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft, FaRegUserCircle } from "react-icons/fa";

import { AuthContext } from "../context/authUser-context";
import Button from "../ui/Button";
import Login from "../ui/Login";

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
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <div className="logo-login">
        <FaRegUserCircle
          style={{
            width: "6rem",
            height: "6rem",
          }}
        />
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
          {/* <Link to="/singUp">
            <Button className="form-submit btn-primary">Sing Up</Button>
          </Link> */}
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
