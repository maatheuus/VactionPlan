import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import supabase from "../../supabase";

import { FaArrowLeft } from "react-icons/fa";
import Button from "../Button";
import image from "../../assets/images/buzzel-logo.png";
import Login from "../Login";

function LoginEmployee() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const email = "exemplo@gmail.com";
  const senha = "exemplo@gmail.com";

  async function loginUser(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error?.status === 400) return;

    navigate("/employee");
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
          <label className="form-login__input--name">Your Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            value={email}
          />

          <label className="form-login__input--password">Your Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            value={senha}
          />
        </div>

        <div className="form-login__button ">
          <Button
            className="form-submit btn-primary"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Login
          </Button>
          ;
          <Link to="/singUp">
            <Button className="form-submit btn-primary">Sing Up</Button>
          </Link>
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
