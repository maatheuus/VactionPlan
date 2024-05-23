import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import {
  formattingDistance,
  checkDistance,
} from "../../services/formattingDate";
import { useMoveTo } from "../../hooks/useMoveTo";
import { useCreateRequest } from "../requests/useCreateRequest";
import { handleErrorsMessages } from "../../services/toastApi";

import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

function NewRequests() {
  const { setTo } = useMoveTo();
  const { isCreating, createRequest } = useCreateRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formatDate = formattingDistance(data.startDate, data.endDate);
    const checkDate = checkDistance(data.startDate, data.endDate);

    // if the end date is greater the 30 days, error
    if (formatDate > 30)
      handleErrorsMessages(
        "The date need to be lass then 30 days or equal 30 days"
      );
    // if the  end date is before the start date, error
    else if (checkDate)
      handleErrorsMessages("The date needs greater than the selected date");
    else {
      createRequest(data, {
        onSuccess: () => setTo("/requests"),
      });
    }
  };

  const variation = {
    base: "block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-500 sm:text-sm sm:leading-6",
    user: "rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300",
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-3">
          Create new Request
        </h1>
      </div>
      <form
        className="shadow py-8 px-16 overflow-hidden text-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Full name" error={errors?.userName?.message}>
          <input
            type="text"
            id="userName"
            className={variation["user"]}
            disabled={isCreating}
            {...register("userName", {
              required: {
                value: true,
                message: "Provide you name.",
              },
              validate: (value) =>
                value.trim() === "" ? "Provide a valid name." : null,
            })}
          />
        </FormRow>
        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            type="email"
            id="email"
            className={variation["user"]}
            disabled={isCreating}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="Location" error={errors?.location?.message}>
          <input
            type="text"
            id="location"
            className={variation["user"]}
            disabled={isCreating}
            {...register("location", {
              required: {
                value: true,
                message: "Provide your location.",
              },
              validate: (value) =>
                value.trim() === "" ? "Provide a valid location." : null,
            })}
          />
        </FormRow>

        <FormRow label="Date start" error={errors?.startDate?.message}>
          <input
            id="startDate"
            type="date"
            className={variation["user"]}
            disabled={isCreating}
            {...register("startDate", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Provide the start date.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Date end" error={errors?.endDate?.message}>
          <input
            id="endDate"
            type="date"
            className={variation["user"]}
            disabled={isCreating}
            {...register("endDate", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Provide the end date.",
              },
            })}
          />
        </FormRow>

        <FormRow label="Observation">
          <textarea
            name="observation"
            id="observation"
            className={variation["user"]}
            disabled={isCreating}
            {...register("observation")}
            rows={4}
            cols={40}
            style={{
              height: "50px",
            }}
          />
        </FormRow>

        <div className="mt-6 flex flex-col gap-y-6 gap-x-6 items-center small:grid small:grid-cols-3 small:gap-y-0">
          <Button
            variation="secondary"
            type="reset"
            className="col-start-1 text-sm font-semibold leading-6 text-gray-900 border-2 border-gray-300 w-full small:w-auto sm:col-start-2"
            disabled={isCreating}
          >
            Cancel
          </Button>
          <Button
            variation="primary"
            className="col-start-3 -order-1 w-full small:order-none small:w-auto"
          >
            {isCreating ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default NewRequests;
