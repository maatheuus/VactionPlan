import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { newRequest } from "../../apiTable";
import { Toaster } from "react-hot-toast";
import { handleErrorsMessages } from "../../toastApi";

import Button from "../Button";

function NewRequest() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // subtracting the months
    const getMonth =
      new Date(getValues("endDate")).getMonth() -
      new Date(getValues("startDate")).getMonth();

    // subtracting the days
    const getDate =
      new Date(getValues("endDate")).getDate() -
      new Date(getValues("startDate")).getDate();

    if ((-getDate < 0 && getMonth >= 1) || getMonth > 1)
      handleErrorsMessages(
        "The date need to be lass then 30 days or equal 30 days"
      );
    // if the day is a negative number or the month , error
    else if (
      (-getDate > 0 && getMonth === 0) ||
      (-getDate >= 0 && getMonth < 0) ||
      (-getDate < 0 && getMonth < 0)
    )
      handleErrorsMessages("The date needs greater than the selected date");
    // if the year was different, error
    else if (
      new Date(getValues("startDate")).getFullYear() !==
      new Date(getValues("endDate")).getFullYear()
    )
      handleErrorsMessages("The date must be in the same year");
    else {
      newRequest(data);
      navigate("/requests");
    }
  };

  return (
    <>
      <section id="employee">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="screen-employee">
          <h1 className="screen-employee__title">Solicitação de férias</h1>

          <div className="screen-employee__inputs input">
            <div className="screen-employee__inputs--col1">
              <label htmlFor="">User name</label>
              <input
                type="text"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "User name needs to be provided",
                  },
                })}
              />
              <p className="error-inputs">{errors?.userName?.message}</p>

              <label htmlFor="">Location</label>
              <input
                type="text"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location needs to be provided",
                  },
                })}
              />
              <p className="error-inputs">{errors?.location?.message}</p>

              <label htmlFor="">Observation</label>
              <textarea type="text" {...register("observation")} />
            </div>

            <div className="screen-employee__inputs--col2">
              <label>Date start</label>
              <input
                type="date"
                {...register("startDate", {
                  valueAsDate: true,
                  required: {
                    value: true,
                    message: "Date needs to be provided",
                  },
                })}
              />
              <p className="error-inputs">{errors?.startDate?.message}</p>

              <label htmlFor="">Date end</label>
              <input
                type="date"
                {...register("endDate", {
                  valueAsDate: true,
                  required: {
                    value: true,
                    message: "Date needs to be provided",
                  },
                })}
              />
              <p className="error-inputs">{errors?.endDate?.message}</p>

              <div className="screen-employee__button">
                <Button
                  onClick={() => handleSubmit(onSubmit)()}
                  className="screen-employee__button--send"
                >
                  Enviar solicitação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewRequest;
