import { useForm } from "react-hook-form";
import { FaArrowCircleLeft } from "react-icons/fa";

import Button from "../../ui/Button";
import Login from "../../pages/Login";
// import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { useMoveTo } from "../../hooks/useMoveTo";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginEmployee() {
  // const { setData, setToLocation } = useNavigateToPage();
  const { setTo } = useMoveTo();
  const { isLoading, login } = useLogin("requests");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password });
  };

  return (
    <Login>
      <Button onClick={() => setTo("..")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>

      <form className="form-login login" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="form-login__button">
          <Button type="submit" className="form-submit btn-primary">
            {isLoading ? <SpinnerMini /> : "Log in"}
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
