import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { motion } from "framer-motion";

import ReadRequests from "../requests/ReadRequests";
import Header from "../../ui/Header";
import Button from "../../ui/Button";
import SettingsApprove from "./SettingsApprove";
import { useAnimatePages } from "../../hooks/useAnimatePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const variants = {
  open: {
    width: "18rem",
    height: "4rem",
    padding: ".5rem 1rem",
  },
  closed: {
    width: 0,
    height: 0,
    padding: 0,
  },
};

function ScreenApprove() {
  const [isShowSettings, setIsShowSettings] = useState(false);

  const ref = useOutsideClick(setIsShowSettings);
  const { variants: variantsPage, initial, animate, exit } = useAnimatePages();

  const { pathname } = useLocation();
  const url = pathname.replace("/approver/", "");

  function showSettings() {
    setIsShowSettings(!isShowSettings);
  }

  return (
    <>
      <Header />

      {url !== "register" && (
        <section id="approve">
          <motion.div
            variants={variantsPage}
            initial={initial}
            animate={animate}
            exit={exit}
            className="screen-approve"
          >
            <div className="screen-approve__button ">
              <h1 className="oxygen-regular">All requests</h1>
            </div>

            <ReadRequests currentPage="approver" />

            {/* Button to the settings */}
            <motion.div
              className="settings"
              ref={ref}
              variants={variants}
              initial="closed"
              animate={isShowSettings ? "open" : "closed"}
            >
              <Button onClick={showSettings} className="settings-btn">
                <HiOutlineCog6Tooth className="settings-icon" />
              </Button>
              {isShowSettings && <SettingsApprove />}
            </motion.div>
          </motion.div>
        </section>
      )}
      <Outlet />
    </>
  );
}

export default ScreenApprove;
/**
 *               {/* <span className="status denied"></span>
                <span className="status approve"></span>
                <span className="status pendent"></span>
                {showCardStatus} 
 */
