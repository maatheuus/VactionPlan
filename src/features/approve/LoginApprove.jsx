import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import SpinnerMini from "../../ui/SpinnerMini";

import { FaArrowCircleLeft } from "react-icons/fa";
import { AuthContext } from "../../context/authUser-context";
import Login from "../../pages/Login";
import Button from "../../ui/Button";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { useMoveTo } from "../../hooks/useMoveTo";
// import { useAuth } from "../hooks/useAuth";

function LoginApprove() {
  const { isAuthenticated, login } = useContext(AuthContext);
  // const { isAuthenticated, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setData, setToLocation } = useNavigateToPage();

  const { setTo } = useMoveTo();

  const emailApprove = "boss@example.com";
  const passwordApprove = "boss1234";

  useEffect(() => {
    setData(isAuthenticated);
    setToLocation("/approver", { replace: true });
  }, [setData, setToLocation, isAuthenticated]);

  const onSubmit = (data) => {
    const { email, password } = data;
    login(email, password);
  };

  return (
    <Login>
      <Button onClick={() => setTo("..")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>

      <form className="form-login login" onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" login__title">Login</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className={errors?.email?.message && "error-input"}
            {...register("email", {
              required: {
                value: true,
                message: "Please, enter your email.",
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
          <input
            type="password"
            placeholder="Password"
            className={errors?.password?.message && "error-input"}
            {...register("password", {
              required: {
                value: true,
                message: "Please, enter your password.",
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
          <Button type="submit" className="form-submit btn-primary">
            {isAuthenticated ? <SpinnerMini /> : "Login"}
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginApprove;
