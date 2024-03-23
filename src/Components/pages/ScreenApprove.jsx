import ReadRequests from "../ReadRequests";
import Header from "../Header";
import { FilterContext } from "../context/filterRequests-context";
import { useContext } from "react";

function ScreenApprove() {
  const { showCardStatus } = useContext(FilterContext);
  return (
    <>
      <Header />
      <section id="approve">
        <div className="screen-approve">
          <div className="screen-approve__button">
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
