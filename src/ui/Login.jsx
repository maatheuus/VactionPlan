import { motion } from "framer-motion";
import { useAnimatePages } from "../hooks/useAnimatePages";

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
        {children}
      </motion.div>
    </section>
  );
}

export default Login;
