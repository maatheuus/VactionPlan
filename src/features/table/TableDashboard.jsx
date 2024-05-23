import { useRequests } from "../requests/useRequests";
import { Loader } from "lucide-react";
import MenuDetailApprover from "../approver/MenuDetailApprover";
function TableDashboard() {
  const { isLoading, requests = [] } = useRequests();

  const sliceRequest = requests.slice(0, 3);

  if (isLoading) {
    return <Loader className="block w-12 h-12 mx-auto animate-spin" />;
  }

  return (
    <div className="big:w-full md:w-[70%] text-sm text-gray-500 shadow-sm hidden small:block">
      <div className="grid grid-cols-2 font-semibold py-5 text-center text-lg text-zinc-700 uppercase bg-stone-100 shadow-md rounded-t-xl ">
        <p className="px-6">User</p>
        <p className="px-6">Location</p>
      </div>

      <ul className="bg-zinc-100 shadow-md list-none relative rounded-b-xl">
        {sliceRequest.map((request) => (
          <li
            key={request.id}
            className="grid grid-cols-2 col-span-full text-center items-center py-3 font-bold text-zinc-950 text-lg"
          >
            <div className="text-base ">{request.userName}</div>
            <div>
              <span className="text-base">{request.location}</span>
            </div>

            <div className="absolute right-5">
              <MenuDetailApprover requestId={request.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableDashboard;
