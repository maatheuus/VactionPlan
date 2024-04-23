import { useContext } from "react";
import { FilterContext } from "../context/filterRequests-context";

import ReadRequests from "../ui/ReadRequests";
import Header from "../ui/Header";

function ScreenApprove() {
  const { showCardStatus } = useContext(FilterContext);
  return (
    <>
      <Header />
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
      </section>
    </>
  );
}

export default ScreenApprove;
