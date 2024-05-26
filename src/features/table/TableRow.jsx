import { EllipsisVertical } from "lucide-react";
import ButtonIcon from "../../ui/ButtonIcon";
import UserAvatar from "../../ui/UserAvatar";

function TableRow({ userName, location, status }) {
  return (
    <>
      <div
        scope="row"
        className="pr-5 py-2 font-bold text-zinc-300 text-lg whitespace-nowrap dark:text-white"
      >
        <UserAvatar name={userName} />
      </div>
      <div className="pr-8">
        <span>{location}</span>
      </div>
      <div className="pr-8">
        <span>{status}</span>
      </div>
      <div className="pr-8 absolute right-0">
        <ButtonIcon type="secondary">
          <EllipsisVertical />
        </ButtonIcon>
      </div>
    </>
  );
}

export default TableRow;
