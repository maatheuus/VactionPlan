import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMoveBack } from "../hooks/useMoveBack";
import { useCreateRequest } from "../hooks/useCreateRequest";

import { FaArrowCircleLeft } from "react-icons/fa";

import { handleErrorsMessages } from "../toastApi";

import Button from "../ui/Button";

import image from "../assets/images/relaxation-bro.png";

function NewRequest() {
  const navigate = useNavigate();
  const { setToBak } = useMoveBack();
  const { isCreating, createRequest } = useCreateRequest();

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
    ) {
      handleErrorsMessages("The date must be in the same year");
    }

    createRequest(data);
    if (!isCreating) {
      navigate("/requests");
    }
  };

  return (
    <>
      <section id="employee">
        <Button onClick={() => setToBak(-1)}>
          <FaArrowCircleLeft className="arrow-left" />
        </Button>

        <div className="screen-employee">
          <h1 className="screen-employee__title lalezar-regular">
            Requests for vacations
          </h1>

          <div className="background-image">
            <img src={image} alt="" />
          </div>

          <div className="screen-employee__inputs input">
            <div className="screen-employee__inputs--col1">
              <div className="form-group lalezar-regular">
                <label htmlFor="name-newRequest">User name</label>
                <input
                  id="name-newRequest"
                  type="text"
                  {...register("userName", {
                    required: {
                      value: true,
                      message: "Provide you name.",
                    },
                    validate: (value) =>
                      value.trim() === "" ? "Provide a valid name." : null,
                  })}
                />
                <p className="error-inputs">{errors?.userName?.message}</p>
              </div>

              <div className="form-group lalezar-regular">
                <label htmlFor="location-newRequest">Location</label>
                <input
                  id="location-newRequest"
                  type="text"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Provide your location.",
                    },
                    validate: (value) =>
                      value.trim() === "" ? "Provide a valid location." : null,
                  })}
                />
                <p className="error-inputs">{errors?.location?.message}</p>
              </div>

              <div className="form-group lalezar-regular">
                <label htmlFor="observation-newRequest">Observation</label>
                <textarea
                  id="observation-newRequest"
                  type="text"
                  {...register("observation")}
                />
              </div>
            </div>

            <div className="screen-employee__inputs--col2">
              <div className="form-group lalezar-regular">
                <label htmlFor="dateStart-newRequest">Date start</label>
                <input
                  id="dateStart-newRequest"
                  type="date"
                  {...register("startDate", {
                    valueAsDate: true,
                    required: {
                      value: true,
                      message: "Provide the start date.",
                    },
                  })}
                />
                <p className="error-inputs">{errors?.startDate?.message}</p>
              </div>

              <div className="form-group lalezar-regular">
                <label htmlFor="dateEnd-newRequest">Date end</label>
                <input
                  id="dateEnd-newRequest"
                  type="date"
                  {...register("endDate", {
                    valueAsDate: true,
                    required: {
                      value: true,
                      message: "Provide the end date.",
                    },
                  })}
                />
                <p className="error-inputs">{errors?.endDate?.message}</p>
              </div>

              <div className="screen-employee__button">
                <Button
                  onClick={() => handleSubmit(onSubmit)()}
                  disabled={isCreating}
                  className="screen-employee__button--send lalezar-regular"
                >
                  Send request
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
