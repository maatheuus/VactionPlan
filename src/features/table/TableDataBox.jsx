import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";

function TableDataBox({ requestId, requests }) {
  const moveBack = useMoveBack();

  const currentRequest = requests.find((value) => value.id === +requestId);

  const {
    userName,
    observation,
    startDate,
    endDate,
    location,
    statusRequest,
    email,
  } = currentRequest;

  const statusToClassName = {
    approve: "text-green-100 bg-green-600",
    denied: "text-red-100 bg-red-600",
    pendent: "text-yellow-100 bg-yellow-600",
  };

  return (
    <>
      <div className="px-4 sm:px-0">
        <div className="flex justify-between">
          <h3 className="flex-1 text-base  font-semibold leading-7 text-gray-900">
            {userName} (vacations)
            <span
              className={`
              ${statusToClassName[statusRequest]} ml-3 uppercase text-sm font-semibold leading-6 rounded-xl py-1 px-2`}
            >
              {statusRequest}
            </span>
          </h3>
          <Button
            onClick={moveBack}
            variation="secondary"
            className="hidden text-black flex-initial sm:flex"
          >
            Back
          </Button>
        </div>
        <p className="text-sm font-medium leading-6 text-gray-900 flex gap-3">
          <CalendarDays />
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userName}
            </dd>
          </div>
          {email !== null && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {email}
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Location
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {location}
            </dd>
          </div>
          {observation !== "" && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Observation
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {observation}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </>
  );
}

export default TableDataBox;
