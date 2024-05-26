import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { useOutsideClick } from "../hooks/useOutsideClick";

function MenuDetail({ requestId, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((open) => !open);
  };
  const ref = useOutsideClick(toggleDropdown, false);

  return (
    <>
      <ButtonIcon
        type="secondary"
        className="text-stone-900 hover:text-stone-400"
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
      >
        <EllipsisVertical />
      </ButtonIcon>

      {isOpen && (
        <ul
          ref={ref}
          key={requestId}
          className="absolute right-0 z-10 bg-stone-50 rounded-md shadow-md w-40 text-sm"
          aria-labelledby="dropdownMenuIconButton"
        >
          {children}
        </ul>
      )}
    </>
  );
}

export default MenuDetail;
