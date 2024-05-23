import { useSearchParams } from "react-router-dom";
import { Loader } from "lucide-react";

import FilterLayout from "../../ui/FilterLayout";
import Requests from "../approver/Requests";
import { useRequests } from "../requests/useRequests";

function Table() {
  const { isLoading, requests } = useRequests();
  const [searchParams] = useSearchParams();

  const filteredValue = searchParams.get("filterField") || "all";
  let filteredRequests;

  if (filteredValue === "all") filteredRequests = requests;

  if (filteredValue === "approve")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "approve"
    );

  if (filteredValue === "denied")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "denied"
    );

  if (filteredValue === "pendent")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "pendent"
    );

  if (isLoading) {
    return <Loader className="block w-12 h-12 mx-auto animate-spin" />;
  }

  return (
    <>
      <FilterLayout filterField={filteredValue} />

      <div className="w-full text-sm shadow-md rounded-md ">
        <div className="grid grid-cols-2 gap-2 items-center font-semibold py-5 text-center text-lg text-stone-900 uppercase border-b-2 md:grid-cols-3">
          <p className="px-6">Name</p>
          <p className="px-6 hidden ms:block">Location</p>
          <p className="px-6 hidden md:block">Status</p>
        </div>

        <Requests requests={filteredRequests} />
      </div>
    </>
  );
}

export default Table;
