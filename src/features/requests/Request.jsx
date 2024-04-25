import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";

import Button from "../../ui/Button";
import ReadRequests from "./ReadRequests";
import { useAnimatePages } from "../../hooks/useAnimatePages";
import { motion } from "framer-motion";

function Request() {
  const navigate = useNavigate();
  const { variants, initial, animate, exit } = useAnimatePages();

  return (
    <section className="request">
      <Button onClick={() => navigate("/")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate}
        exit={exit}
        className="request__content"
      >
        <h1 className="request__title lalezar-regular ">Requests</h1>
        <div className="request__cards">
          <ReadRequests currentPage="request" />
        </div>
      </motion.div>
      <div className="request__button">
        <Button to="/newRequest" className="request__button--new">
          <FaPlus />
        </Button>
      </div>
    </section>
  );
}

export default Request;
