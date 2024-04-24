import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft } from "react-icons/fa";
import { AuthContext } from "../context/authUser-context";

import Button from "../ui/Button";

function NewUser() {
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
    const { email, password } = data;
    singUp(email, password);
  };

  return (
    <div className="container-newUser">
      <Button onClick={() => navigate(-1)}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <form className="form-newUser">
        <div>
          <div className="form-group">
            <label className="form-newUser--label">Email address</label>
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
            <label className="form-newUser--label">Password</label>
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
            <label className="form-newUser--label">Confirm Password</label>
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

        <div className="form-button">
          <Button
            className="form-submit btn-primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
