import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../context/authUser-context";

import Button from "../ui/Button";
import Login from "../ui/Login";

function SingUp() {
  const { isAuthenticated, singUp } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/requests", { replace: true });
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const whatPassword = watch("password");

  const onSubmit = (data) => {
    singUp(data.email, data.password);
  };

  return (
    <Login>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>
      <h1 className="singUp-title">Sing Up</h1>

      <form className="form-login__singUp login">
        <div className="form-login__input">
          <div className="form-group">
            <label className="form-login__input--name">Email address</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email address",
                },
                validate: (email) => {
                  if (!email.includes("@") || !email.includes(".com"))
                    return "Missing @ or .com in the email address";
                },
              })}
            />
            <p className="error-inputs">{errors?.email?.message}</p>
          </div>
          <div className="form-group">
            <label className="form-login__input--password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter a valid password",
                },
                minLength: {
                  value: 6,
                  message: "Please enter a password with at least 6 characters",
                },
              })}
            />
            <p className="error-inputs">{errors?.password?.message}</p>
          </div>
          <div className="form-group">
            <label className="form-login__input--password">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirm_password", {
                required: true,
                validate: (password) => {
                  if (password !== whatPassword)
                    return "The password does not match";
                },
              })}
            />
            <p className="error-inputs">{errors?.confirm_password?.message}</p>
          </div>
        </div>

        <div className="form-login__button">
          <Button
            className="form-submit btn-primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Sing Up
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default SingUp;
