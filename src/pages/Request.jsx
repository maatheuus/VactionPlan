import { FaPlus } from "react-icons/fa";

import Header from "../ui/Header";
import Button from "../ui/Button";
import ReadRequests from "../ui/ReadRequests";

function Request() {
  return (
    <>
      <Header />

      <section className="request">
        <div className="request__content">
          <h1 className="request__title lalezar-regular ">Requests</h1>
          <div className="request__cards">
            <ReadRequests currentPage="request" />
          </div>
        </div>
        <div className="request__button">
          <Button to="/newRequest" className="request__button--new">
            <FaPlus />
          </Button>
        </div>
      </section>
    </>
  );
}

export default Request;
