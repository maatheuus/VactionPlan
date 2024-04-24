import { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { FilterContext } from "../context/filterRequests-context";

import ReadRequests from "../ui/ReadRequests";
import Header from "../ui/Header";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Button from "../ui/Button";
import SettingsApprove from "./SettingsApprove";

function ScreenApprove() {
  const [isShowSettings, setIsShowSettings] = useState(false);
  const { showCardStatus } = useContext(FilterContext);
  const { pathname } = useLocation();
  const url = pathname.replace("/approve/", "");
  // console.log(url, pathname);

  function showSettings() {
    setIsShowSettings(!isShowSettings);
  }

  return (
    <>
      <Header />

      {url !== "register" && (
        <>
          <section id="approve">
            <div className="screen-approve">
              <div className="screen-approve__button oxygen-regular">
                <span className="status denied"></span>
                <span className="status approve"></span>
                <span className="status pendent"></span>
                {showCardStatus}
              </div>
              <ReadRequests currentPage="approve" />
            </div>
            <div className="settings">
              <Button onClick={showSettings} className="settings-btn">
                <HiOutlineCog6Tooth className="settings-icon" />
              </Button>
              {isShowSettings && <SettingsApprove />}
            </div>
          </section>
        </>
      )}
      <Outlet />
    </>
  );
}

export default ScreenApprove;
