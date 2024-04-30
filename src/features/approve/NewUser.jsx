import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft, FaLock, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../../context/authUser-context";
import { motion } from "framer-motion";

import Button from "../../ui/Button";
import { useAnimatePages } from "../../hooks/useAnimatePages";

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
  const { variants, initial, animate, exit } = useAnimatePages();

  return (
    <motion.div
      className="container-newUser"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <Button onClick={() => navigate(-1)} className="button-all">
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <form className="form">
        <div className="form-group">
          <FaEnvelope className="form__icon" />
          <input
            type="email"
            placeholder="Email Address"
            className="form__input"
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
          <FaLock className="form__icon" />
          <input
            type="password"
            placeholder="Password"
            className="form__input"
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
          <FaLock className="form__icon" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form__input"
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

        <div className="form-button">
          <Button
            className="form-submit btn-primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Register
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default NewUser;
