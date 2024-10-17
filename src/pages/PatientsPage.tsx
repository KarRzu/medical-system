import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table, User } from "../components/shared/Table";
import { usePatientsActions } from "../hooks/usePatientsActions";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState<User | null>(null);

  const { deletePatient } = usePatientsActions();

  const handleDelete = (id: string) => async () => {
    await deletePatient(id);
  };

  const handleEditPatient = async (patient: User) => {
    setCurrentPatient(patient);
    setModalOpen(true);
  };

  const handleAddPatient = async () => {
    setCurrentPatient(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentPatient(null);
  };

  return (
    <>
      <div className="mt-12">
        <Table onDelete={handleDelete} onEdit={handleEditPatient} />

        <button
          className="w-16 bg-custom-blue font-bold text-lg m-12 rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Add
        </button>
        {modalOpen && (
          <Modal
            closeModal={handleCloseModal}
            addPatient={handleAddPatient}
            currentPatient={currentPatient}
          />
        )}
      </div>
    </>
  );
}
