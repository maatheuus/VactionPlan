import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft, FaRegUserCircle } from "react-icons/fa";

import { AuthContext } from "../../context/authUser-context";
import Button from "../../ui/Button";
import Login from "../../pages/Login";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { useMoveTo } from "../../hooks/useMoveTo";

function LoginEmployee() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const { setData, setToLocation } = useNavigateToPage();
  const { setTo } = useMoveTo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setData(isAuthenticated);
    setToLocation("/requests", { replace: true });
  }, [setData, setToLocation, isAuthenticated]);

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <Login>
      <Button onClick={() => setTo("..")}>
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
            <input
              placeholder="Email"
              type="email"
              className={errors?.password?.message && "error-input"}
              {...register("email", {
                required: {
                  value: true,
                  message: "Please, enter your email.",
                },
              })}
            />
            <p className="error-inputs">{errors?.email?.message}</p>
          </div>

          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              className={errors?.password?.message && "error-input"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Please, enter your password.",
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
          {/* <Link to="/singUp">
            <Button className="form-submit btn-primary">Sing Up</Button>
          </Link> */}
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
