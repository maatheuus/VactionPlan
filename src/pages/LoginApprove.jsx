import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { FaArrowCircleLeft, FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/authUser-context";
import Login from "../ui/Login";
import Button from "../ui/Button";
import { useNavigateToPage } from "../hooks/useNavigateToPage";
import { useMoveBack } from "../hooks/useMoveBack";

function LoginApprove() {
  const { isAuthenticated, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setData, setToLocation } = useNavigateToPage();
  const { setToBak } = useMoveBack();

  const emailApprove = "boss@example.com";
  const passwordApprove = "boss1234";

  useEffect(() => {
    setData(isAuthenticated);
    setToLocation("/approve", { replace: true });
  }, [setData, setToLocation, isAuthenticated]);

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <Login>
      <Button onClick={() => setToBak(-1)}>
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
      <form className="form-login login" onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" login__title">Login</h1>
        <div className="form-login__input">
          <div className="form-group">
            <label
              htmlFor="name-approve"
              className="form-login__input--name lalezar-regular"
            >
              Email
            </label>

            <input
              id="name-approve"
              type="email"
              className={errors?.email?.message ? "error-input" : ""}
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
            <label
              htmlFor="password-approve"
              className="form-login__input--password lalezar-regular"
            >
              Password
            </label>
            <input
              id="password-approve"
              type="password"
              className={errors?.password?.message ? "error-input" : ""}
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
        </div>
        <div className="form-login__button">
          <Button type="submit" className="form-submit btn-primary">
            Login
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginApprove;
