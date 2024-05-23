import { useForm } from "react-hook-form";
import { ArrowLeftToLine, Loader } from "lucide-react";
import { useLogin } from "./useLogin";
import FormLogin from "./FormLogin";
import Login from "../../pages/Login";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";

function LoginApprove() {
  const { isLoading, login } = useLogin("/approver");

  // const email = "boss@example.com";
  // const password = "boss1234";

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
        <span className="mr-3 text-stone-500 text-sm">
          Email: boss@example.com |{" "}
        </span>
        <span className="text-stone-500 text-sm">Senha: boss1234</span>
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

export default LoginApprove;
