import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { useAnimatePages } from "../../hooks/useAnimatePages";

import ButtonIcon from "../../ui/ButtonIcon";
import ReadRequests from "./ReadRequests";
import Logout from "../authentication/Logout";

function Request() {
  const { variants, initial, animate, exit } = useAnimatePages();
  return (
    <section id="requests">
      <h1 className="request__title lalezar-regular ">Requests</h1>

      <div className="container-requests">
        <Logout />
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
