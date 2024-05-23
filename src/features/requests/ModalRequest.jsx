import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Loader, CircleX } from "lucide-react";
import {
  formattingDistance,
  checkDistance,
} from "../../services/formattingDate";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useRequests } from "./useRequests";
import { useParams } from "react-router-dom";
import { useUpdateRequest } from "./useUpdateRequest";

import { handleErrorsMessages } from "../../services/toastApi";
import ButtonIcon from "../../ui/ButtonIcon";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

function ModalRequest({ closeModal }) {
  const { isLoading, requests = [] } = useRequests();
  const { requestId } = useParams();
  const currentRequest = requests.find((value) => value.id === +requestId);
  const { isUpdate, updateRequest } = useUpdateRequest();
  const ref = useOutsideClick(closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...currentRequest,
    },
  });

  const onSubmit = (data) => {
    const formatDate = formattingDistance(data.startDate, data.endDate);
    const checkDate = checkDistance(data.startDate, data.endDate);

    if (formatDate > 30) {
      handleErrorsMessages(
        "The date need to be lass then 30 days or equal 30 days"
      );
    } else if (checkDate) {
      handleErrorsMessages("The date needs greater than the selected date");
    } else {
      updateRequest(
        { newRequestData: data, id: data.id },
        {
          onSuccess: () => closeModal(),
        }
      );
    }
  };

  const variation = {
    base: "block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-zinc-500 sm:text-sm sm:leading-6",
    user: "rounded-md border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 col-span-2 lg:col-span-1",
  };

  if (isLoading) return <Loader className="animate-spin" />;

  return createPortal(
    <div className="fixed top-0 left-0 z-50 w-svw h-dvh backdrop-blur-sm sm">
      <div
        ref={ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-auto bg-zinc-100 shadow-md"
      >
        <ButtonIcon
          className="w-auto absolute  right-4 text-black hover:text-none sm:top-4"
          type="secondary"
          onClick={() => closeModal()}
        >
          <CircleX className="w-8 h-8" />
        </ButtonIcon>

        <form
          className="shadow py-0 px-4 text-lg rounded-lg sm:py-8 sm:px-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormRow label="Full name" error={errors?.userName?.message}>
            <input
              type="text"
              id="userName"
              className={variation["user"]}
              disabled={isUpdate}
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
              disabled={isUpdate}
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
              disabled={isUpdate}
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
              disabled={isUpdate}
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
              disabled={isUpdate}
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
              disabled={isUpdate}
              {...register("observation")}
              rows={4}
              cols={40}
              style={{
                height: "50px",
              }}
            />
          </FormRow>

          <div className="mt-2 flex flex-col items-center gap-x-6 gap-4 pb-5 sm:gap-0 sm:grid sm:grid-cols-3 sm:mt-6">
            <Button
              variation="secondary"
              type="button"
              onClick={() => closeModal()}
              className="col-start-1 text-sm font-semibold leading-6 text-gray-900 border-2 border-gray-300 w-full sm:w-auto order-1 sm:order-none"
              disabled={isUpdate}
            >
              Cancel
            </Button>
            <Button
              variation="primary"
              className="col-start-3 w-full sm:w-auto"
            >
              {isUpdate ? <Loader className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default ModalRequest;
