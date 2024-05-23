import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { ArrowLeftToLine, Loader } from "lucide-react";

import Login from "../../pages/Login";
import FormLogin from "./FormLogin";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";

function LoginEmployee() {
  const { isLoading, login } = useLogin("/requests/employers");

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
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <FormLogin register={register} errors={errors} />

        <div className="flex flex-col gap-7 xs:flex-row">
          <Button variation="primary" disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin" /> : "Log in"}
          </Button>
          <ButtonIcon
            type="primary"
            to=".."
            disabled={isLoading}
            className="order-1"
          >
            <ArrowLeftToLine />
            <span>Go back</span>
          </ButtonIcon>
        </div>
      </form>
    </Login>
  );
}

export default LoginEmployee;
