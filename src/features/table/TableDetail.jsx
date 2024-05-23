import Button from "../../ui/Button";
import TableDataBox from "./TableDataBox";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useRequests } from "../requests/useRequests";
import { useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import { useUpdateRequest } from "../requests/useUpdateRequest";

function TableDetail() {
  const moveBack = useMoveBack();
  const { updateRequest, isUpdate } = useUpdateRequest();
  const { isLoading, requests } = useRequests();
  const { requestId } = useParams();

  const currentRequestValue = requests.find((value) => value.id === +requestId);
  const { statusRequest } = currentRequestValue;

  if (isLoading)
    return <Loader className="block w-12 h-12 mx-auto  animate-spin" />;

  return (
    <div className="flex gap-10 flex-col justify-between">
      <TableDataBox requests={requests} requestId={requestId} />

      <div className="gap-10 flex flex-col justify-end small:flex-row">
        <Button
          onClick={moveBack}
          variation="secondary"
          className="text-black order-3 small:order-none"
        >
          Back
        </Button>
        <Button
          variation="danger"
          disabled={isUpdate || statusRequest === "denied"}
          className={`${isUpdate || (statusRequest === "denied" && "cursor-not-allowed")} order-2 small:order-none`}
          onClick={() =>
            updateRequest({
              newRequestData: { statusRequest: "denied" },
              id: requestId,
            })
          }
        >
          {isUpdate && statusRequest === "approve" ? (
            <Loader className="animate-spin" />
          ) : (
            "Deny"
          )}
        </Button>

        <Button
          variation="approve"
          disabled={isUpdate || statusRequest === "approve"}
          className={`${isUpdate || (statusRequest === "approve" && "cursor-not-allowed")} order-1 small:order-none`}
          onClick={() =>
            updateRequest({
              newRequestData: { statusRequest: "approve" },
              id: requestId,
            })
          }
        >
          {isUpdate && statusRequest === "denied" ? (
            <Loader className="animate-spin" />
          ) : (
            "Approve"
          )}
        </Button>
      </div>
    </div>
  );
}

export default TableDetail;
