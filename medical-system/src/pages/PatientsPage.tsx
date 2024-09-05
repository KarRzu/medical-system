import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table } from "../components/shared/Table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      profile: "image",
      name: "Michael",
      age: 24,
      mobile: "530 026 589",
      city: "Warsaw",
      dateBirth: "05/09/2001",
      delete: <RiDeleteBin6Line />,
      edit: <MdEdit />,
    },
    {
      id: 2,
      profile: "image",
      name: "Michael",
      age: 24,
      mobile: "530 026 589",
      city: "Warsaw",
      dateBirth: "05/09/2001",
      delete: <RiDeleteBin6Line />,
      edit: <MdEdit />,
    },
  ]);

  const handleDeleteRow = (targetIndex: number) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  return (
    <>
      <div className="mt-12">
        <Table rows={rows} deleteRow={handleDeleteRow} />
        <button
          className="w-16 bg-custom-blue font-bold text-lg m-12 rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Add
        </button>
        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </div>
    </>
  );
}
