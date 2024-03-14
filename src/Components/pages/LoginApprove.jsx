import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import supabase from "../../supabase";

import Button from "../Button";
import image from "../../assets/images/buzzel-logo.png";
import Login from "../Login";

function LoginApprove() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const email = "boss@gmail.com";
  const senha = "boss@gmail.com";

  async function loginUser(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error?.status === 400 || data.user.email !== email) return;

    navigate("/approve");
  }

  const onSubmit = (data) => {
    loginUser(data.email, data.password);
  };

  return (
    <Login>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-left" />
      </Button>
      <div className="logo-login">
        <img src={image} alt="logo of the page" />
      </div>
      <form className="form-login login">
        <h1 className=" login__title">Login</h1>
        <div className="form-login__input">
          <label className="form-login__input--name">Your email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            value={email}
          />

          <label className="form-login__input--password">Your password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            value={senha}
          />
        </div>
        <div className="form-login__button">
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            className="form-submit btn-primary"
          >
            Login
          </Button>
        </div>
      </form>
    </Login>
  );
}

export default LoginApprove;
