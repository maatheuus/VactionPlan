import ReadRequests from "../ReadRequests";
import Header from "../Header";

function ScreenApprove() {
  return (
    <>
      <Header />
      <section id="approve">
        <div className="screen-approve">
          <div className="screen-approve__button">
            <span className="status denied"></span>
            <span className="status approve"></span>
            <span className="status pendent"></span>
            All
          </div>
          <ReadRequests currentPage="approve" />
        </div>
      </section>
    </>
  );
}

export default ScreenApprove;
