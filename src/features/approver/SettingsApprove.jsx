import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useUpdateUser } from "../authentication/useUpdateUser";
import { Loader } from "lucide-react";

function SettingsApprove() {
  const [name, setName] = useState();
  const { updateUser, isLoading } = useUpdateUser();
  const { user } = useUser();
  const {
    email,
    user_metadata: { fullName },
  } = user;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit({ fullName }) {
    updateUser({ fullName }, { onSettled: () => reset() });
  }

  const variation = {
    user: "rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 text-sm",
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-3">
          Settings
        </h1>
      </div>
      <form
        className="shadow py-8 px-16 overflow-hidden text-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Full name" error={errors?.fullName?.message}>
          <input
            type="text"
            id="fullName"
            placeholder={fullName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={variation["user"]}
            {...register("fullName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Email address">
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className={`${variation["user"]} cursor-not-allowed`}
          />
        </FormRow>

        <div className="mt-6 gap-x-6 flex justify-around flex-col gap-y-6 small:gap-y-0 small:flex-row sm:grid sm:grid-cols-3 sm:items-center">
          <Button
            variation="secondary"
            type="reset"
            className="col-start-2 text-sm font-semibold leading-6 text-gray-900 border-2 border-gray-300 order-1 sm:order-none "
          >
            Cancel
          </Button>
          <Button variation="primary" className="col-start-3">
            {isLoading ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default SettingsApprove;
