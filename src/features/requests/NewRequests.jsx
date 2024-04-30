import { useForm } from "react-hook-form";
import { useMoveTo } from "../../hooks/useMoveTo";
import { useCreateRequest } from "../requests/useCreateRequest";
import { motion } from "framer-motion";

import {
  FaCircleArrowLeft,
  FaLocationDot,
  FaRegUser,
  FaHourglassStart,
  FaHourglassEnd,
} from "react-icons/fa6";

import { handleErrorsMessages } from "../../services/toastApi";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

// import image from "../../../public/images/relaxation-bro.png";
import { useAnimatePages } from "../../hooks/useAnimatePages";

import {
  formattingDistance,
  checkDistance,
} from "../../services/formattingDate";

function NewRequests() {
  const { setTo } = useMoveTo();
  const { isCreating, createRequest } = useCreateRequest();
  const { variants, initial, animate, exit } = useAnimatePages();

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
    if (checkDate)
      handleErrorsMessages("The date needs greater than the selected date");

    createRequest(data);

    if (!isCreating) {
      setTo("/requests");
    }
  };
  return (
    <section id="employee">
      <Button onClick={() => setTo(-1)} className="button-all">
        <FaCircleArrowLeft className="arrow-left" />
      </Button>

      <motion.div
        className="screen-employee"
        variants={variants}
        initial={initial}
        animate={animate}
        exit={exit}
      >
        <h1 className="screen-employee__title">Requests for vacations</h1>
        {/* 
        <div className="background-image">
          <img src={image} alt="woman in the pool" />
        </div> */}

        <form className="form">
          <div className="form__inputs">
            <div className="form__inputs--col1">
              <div className="form-group">
                <FaRegUser className="form__icon" />
                <input
                  placeholder="Your name"
                  className="form__input"
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

              <div className="form-group">
                <FaLocationDot className="form__icon" />
                <input
                  placeholder="Location"
                  className="form__input"
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

              <div className="form-group">
                <textarea
                  className="form__input textarea"
                  rows="4"
                  placeholder="Observations"
                  type="text"
                  {...register("observation")}
                />
              </div>
            </div>

            <div className="form__inputs--col2">
              <div className="form-group">
                <FaHourglassStart className="form__icon" />

                <input
                  className="form__input"
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

              <div className="form-group">
                <FaHourglassEnd className="form__icon" />
                <input
                  className="form__input"
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

              <div className="form__button">
                <Button
                  onClick={() => handleSubmit(onSubmit)()}
                  disabled={isCreating}
                  className="btn-send"
                >
                  {isCreating ? <SpinnerMini /> : "Send request"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default NewRequests;
