import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
// import { getRequests, realTimeData } from "../apiTable";
// import { FilterContext } from "../context/filterRequests-context";

import Card from "../../ui/Card";
import { useRequests } from "./useRequests";
import Spinner from "../../ui/Spinner";

export default function ReadRequests({ currentPage }) {
  const { clickView } = useContext(ModalContext);
  // const { showCardStatus, allUserRequests } = useContext(FilterContext);

  const { isLoading, requests } = useRequests();
  // console.log("isLoading", isLoading);
  // console.log("requests", requests);

  // const [userRequest, setUserRequest] = useState([]);
  // const [removeSpinner, setRemoveSpinner] = useState(false);

  /*
  // showing user requests by filtering them
  useEffect(() => {
    getRequests().then((data) => {
      setRemoveSpinner(true);
      allUserRequests(data);
      setUserRequest(data);
    });

    if (showCardStatus === "all") return;

    if (showCardStatus === "approve") {
      getRequests(true, "approve").then((data) => {
        setUserRequest(data);
      });
    }
    if (showCardStatus === "denied") {
      getRequests(true, "denied").then((data) => {
        setUserRequest(data);
      });
    }
    if (showCardStatus === "pending") {
      setRemoveSpinner(true);
      getRequests(true, "pendent").then((data) => {
        setUserRequest(data);
      });
    }
  }, [showCardStatus]);
*/
  if (isLoading) return <Spinner />;

  return (
    <div className="content-cards">
      {requests.length === 0 && (
        <p className="no-requests">No request yet...</p>
      )}
      {requests.map((value) => {
        if (value.userName === undefined) return;
        return (
          <Card
            key={value.id}
            title="Vacation"
            curRequest={value}
            onClick={() => clickView(currentPage, value.id)}
          />
        );
      })}
    </div>
  );
}
