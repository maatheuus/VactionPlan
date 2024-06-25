import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "lucide-react";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useRequests } from "../../features/requests/useRequests";
import ModalRequest from "../requests/ModalRequest";

import Button from "../../ui/Button";
import TableDataBox from "../table/TableDataBox";

function TableDetailEmp() {
  const moveBack = useMoveBack();
  const { isLoading, requests } = useRequests();
  const { requestId } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const close = setIsOpen;
  const open = () => setIsOpen(true);

  if (isLoading)
    return <Loader className="block w-12 h-12 mx-auto animate-spin" />;

  return (
    <div className="max-w-[100%] grid gris-rows-2 grid-cols-6">
      <div className="col-span-full">
        <h2 className="text-2xl p-3 font-semibold text-gray-900">Details</h2>
      </div>
      <div className="flex gap-10 flex-col p-10 shadow-md rounded-md col-start-1 col-end-8 lg:col-start-2 lg:col-end-6 sm:w-3xl">
        <TableDataBox requests={requests} requestId={requestId} />

        <div className="gap-10 flex flex-col justify-end ms:flex-row ms:gap-6">
          <Button
            onClick={moveBack}
            variation="secondary"
            className="text-black order-1 ms:order-none"
          >
            Back
          </Button>

          <Button variation="primary" onClick={open}>
            Edit
          </Button>
        </div>
      </div>
      {isOpen && <ModalRequest closeModal={close} />}
    </div>
  );
}

export default TableDetailEmp;
