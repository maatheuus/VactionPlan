import { CircleCheck, CircleSlash2, Eye } from "lucide-react";
import ButtonIcon from "../../ui/ButtonIcon";
import MenuDetail from "../../ui/MenuDetail";
import { useNavigate } from "react-router-dom";
import { useUpdateRequest } from "../requests/useUpdateRequest";
import { useRequests } from "../requests/useRequests";

function MenuDetailApprover({ requestId }) {
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { requests } = useRequests();

  const currentRequestValue = requests.find((value) => value.id === +requestId);
  const { statusRequest } = currentRequestValue;

  return (
    <MenuDetail requestId={requestId}>
      <li>
        <ButtonIcon
          type="secondary"
          onClick={() => navigate(`/approver/requests/${requestId}`)}
          className="grid grid-cols-2 justify-items-center py-2 text-stone-950 hover:bg-stone-900 hover:text-stone-100"
        >
          <Eye /> <span className="mr-auto">See details</span>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon
          type="secondary"
          className={`grid grid-cols-2 justify-items-center py-2 text-stone-950 hover:bg-stone-900 hover:text-stone-100 ${
            statusRequest === "approve" && "cursor-not-allowed"
          }`}
          disabled={statusRequest === "approve"}
          onClick={() =>
            updateRequest({
              newRequestData: { statusRequest: "approve" },
              id: requestId,
            })
          }
        >
          <CircleCheck /> <span className="mr-auto">Approve</span>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon
          type="secondary"
          className={`grid grid-cols-2 justify-items-center py-2 text-stone-950 hover:bg-stone-900 hover:text-stone-100 ${
            statusRequest === "denied" && "cursor-not-allowed"
          }`}
          disabled={statusRequest === "denied"}
          onClick={() =>
            updateRequest({
              newRequestData: { statusRequest: "denied" },
              id: requestId,
            })
          }
        >
          <CircleSlash2 />
          <span className="mr-auto">Deny</span>
        </ButtonIcon>
      </li>
    </MenuDetail>
  );
}

export default MenuDetailApprover;
