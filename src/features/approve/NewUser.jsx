import { useForm } from "react-hook-form";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import { useAnimatePages } from "../../hooks/useAnimatePages";
import { useSignUp } from "../authentication/useSignUp";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function NewUser() {
  const { isLoading, signUp } = useSignUp();
  const { variants, initial, animate, exit } = useAnimatePages();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  function onSubmit({ email, password }) {
    signUp(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <motion.div
      className="container-newUser"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <FaEnvelope className="form__icon" />
          <input
            type="email"
            placeholder="Email Address"
            disabled={isLoading}
            className="form__input"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
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
            disabled={isLoading}
            className="form__input"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
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
            disabled={isLoading}
            className="form__input"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
          <p className="error-inputs">{errors?.passwordConfirm?.message}</p>
        </div>

        <div className="form-button">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button className="form-submit btn-primary" type="submit">
              Create new user
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  );
}

export default NewUser;
