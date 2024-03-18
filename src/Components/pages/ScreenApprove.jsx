import ReadRequests from "../ReadRequests";
import Header from "../Header";

function ScreenApprove() {
  return (
    <>
      <Header />
      <section id="approve">
        <div className="screen-approve">
          <div className="screen-approve__button">
            <span className="ball red"></span>
            <span className="ball green"></span>
            <span className="ball orange"></span>
            All
          </div>
          <ReadRequests currentPage="approve" />
        </div>
      </section>
    </>
  );
}

export default ScreenApprove;
