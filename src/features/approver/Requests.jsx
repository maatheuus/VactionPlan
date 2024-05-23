import { useLocation } from "react-router-dom";
import UserAvatar from "../../ui/UserAvatar";
import MenuDetailApprover from "../approver/MenuDetailApprover";
import MenuDetailEmployer from "../employer/MenuDetailEmployer";

function Requests({ requests }) {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  const statusToClassName = {
    approve: "text-green-100 bg-green-600",
    denied: "text-red-100 bg-red-600",
    pendent: "text-yellow-100 bg-yellow-600",
  };

  return (
    <ul className="bg-stone-50 shadow-md grid grid-cols-2 list-none relative rounded-b-xl gap-2 md:grid-cols-2 ">
      {requests.map((request) => (
        <li
          key={request.id}
          className="grid grid-cols-1 col-span-full text-center px-14 items-center py-3 font-bold text-stone-900 text-lg shadow-sm ms:grid-cols-2 md:grid-cols-3"
        >
          <div className="text-lg whitespace-nowrap">
            <UserAvatar
              name={request.userName}
              classSpan="text-stone-950"
              className="gap-6 items-center"
            />
          </div>
          <div className="hidden ms:block">
            <span className="text-right">{request.location}</span>
          </div>
          <div className="pl-20 hidden md:block">
            <span
              className={`${statusToClassName[request.statusRequest]} ml-3 uppercase text-sm font-semibold leading-6 rounded-xl py-1 px-2`}
            >
              {request.statusRequest}
            </span>
          </div>
          <div className="absolute right-10">
            {url.startsWith("approver") ? (
              <MenuDetailApprover requestId={request.id} />
            ) : (
              <MenuDetailEmployer requestId={request.id} />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Requests;
