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

/*
<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
    <EllipsisVertical />
</button>


<div id="dropdownDotsHorizontal" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
*/
