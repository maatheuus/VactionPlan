import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";

import ReadRequests from "./ReadRequests";
import { useAnimatePages } from "../../hooks/useAnimatePages";
import { motion } from "framer-motion";
import ButtonIcon from "../../ui/ButtonIcon";

const styleIcon = {
  position: "absolute",
  left: "2.5rem",
  top: "2.5rem",
  width: "3rem",
  height: "3rem",
};

function Request() {
  const navigate = useNavigate();
  const { variants, initial, animate, exit } = useAnimatePages();

  return (
    <section id="requests">
      <h1 className="request__title lalezar-regular ">Requests</h1>

      <div className="container-requests">
        <ButtonIcon
          onClick={() => navigate("/")}
          className="button-all"
          icon={<FaArrowCircleLeft style={styleIcon} />}
        />
        <motion.div
          variants={variants}
          initial={initial}
          animate={animate}
          exit={exit}
          className="container-requests__content"
        >
          <ReadRequests currentPage="request" />

          <div className="container-requests__button">
            <ButtonIcon to="/newRequest">
              <FaPlus />
            </ButtonIcon>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Request;
