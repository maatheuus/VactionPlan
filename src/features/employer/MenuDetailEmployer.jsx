import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import ButtonIcon from "../../ui/ButtonIcon";
import MenuDetail from "../../ui/MenuDetail";

function MenuDetailEmployer({ requestId }) {
  const navigate = useNavigate();

  return (
    <MenuDetail requestId={requestId}>
      <li>
        <ButtonIcon
          type="secondary"
          onClick={() => navigate(`/requests/employers/${requestId}`)}
          className="justify-evenly p-2 text-stone-950 hover:bg-stone-900 hover:text-stone-100"
        >
          <Eye /> <span className="text-center">See details</span>
        </ButtonIcon>
      </li>
    </MenuDetail>
  );
}

export default MenuDetailEmployer;
