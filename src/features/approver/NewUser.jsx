import { useForm } from "react-hook-form";
import { useSignUp } from "../authentication/useSignUp";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { Loader } from "lucide-react";

function NewUser() {
  const { isLoading, signUp } = useSignUp();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  function onSubmit(data) {
    const { email, password, fullName } = data;
    signUp(
      { email, password, fullName },
      {
        onSettled: () => reset(),
      }
    );
  }

  const variation = {
    user: "rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300",
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-3">
          Create new User
        </h1>
      </div>
      <form
        className="shadow py-8 px-3 overflow-hidden text-lg rounded-lg small:px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Full name" error={errors?.fullName?.message}>
          <input
            type="text"
            id="fullName"
            className={variation["user"]}
            disabled={isLoading}
            {...register("fullName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            id="email"
            className={variation["user"]}
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters)"
          error={errors?.password?.message}
        >
          <input
            type="password"
            id="password"
            className={variation["user"]}
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat password"
          error={errors?.passwordConfirm?.message}
        >
          <input
            type="password"
            id="passwordConfirm"
            className={variation["user"]}
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <div className="mt-6 flex flex-col gap-y-6 gap-x-6 items-center small:grid small:grid-cols-3 small:gap-y-0">
          <Button
            variation="secondary"
            type="reset"
            className="col-start-1 text-sm font-semibold leading-6 text-gray-900 border-2 border-gray-300 w-full small:w-auto sm:col-start-2"
          >
            Cancel
          </Button>
          <Button
            variation="primary"
            className="col-start-3 -order-1 w-full small:order-none small:w-auto"
          >
            {isLoading ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default NewUser;
