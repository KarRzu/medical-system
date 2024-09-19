import { useEffect, useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table } from "../components/shared/Table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase-config";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleDeleteRow = (targetIndex: number) => {
  //   setRows(rows.filter((_, index) => index !== targetIndex));
  // };

  return (
    <>
      <div className="mt-12">
        <Table />
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
