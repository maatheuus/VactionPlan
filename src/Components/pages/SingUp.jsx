import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import validator from "validator";
import supabase from "../../supabase";

import Button from "../Button";
import Login from "../Login";

function SingUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const whatPassword = watch("password");

  async function registerUser(emailUser, passwordUser) {
    const { error } = await supabase.auth.signUp({
      email: emailUser,
      password: passwordUser,
    });

    if (error?.status === 400) return;

    navigate("/employee");
  }

  const onSubmit = (data) => {
    registerUser(data.email, data.password);
  };

  return (
    <Login>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>
      <h1 className="singUp-title">Sing Up</h1>

      <form className="form-login__singUp login">
        <div className="form-login__input">
          <label className="form-login__input--name">Name</label>
          <input type="text" {...register("name", { required: true })} />

          <label className="form-login__input--name">Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />

          <label className="form-login__input--password">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />

          <label className="form-login__input--password">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirm_password", {
              required: true,
              validate: (value) => {
                if (value === whatPassword) return;
                else throw new Error("Invalid password");
              },
            })}
          />
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
