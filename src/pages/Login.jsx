import { motion } from "framer-motion";
import { useAnimatePages } from "../hooks/useAnimatePages";
import { FaRegUserCircle } from "react-icons/fa";

function Login({ children }) {
  const { variants, initial, animate, exit } = useAnimatePages();
  return (
    <section id="login">
      <motion.div
        variants={variants}
        initial={initial}
        animate={animate}
        exit={exit}
        className="content-login"
      >
        <div className="logo-login">
          <FaRegUserCircle
            style={{
              width: "6rem",
              height: "6rem",
            }}
          />
        </div>
        {children}
      </motion.div>
    </section>
  );
}

export default Login;
