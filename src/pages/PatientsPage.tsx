import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table, User } from "../components/shared/Table";
import { usePatientsActions } from "../hooks/usePatientsActions";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState<User | null>(null);

  const { createPatient, deletePatient, editPatient } = usePatientsActions();

  return (
    <>
      <div className="mt-12">
        <Table
          onDelete={async (id: string) => {
            await deletePatient(id);
          }}
          onEdit={async (patient: User) => {
            setCurrentPatient(patient);
            setModalOpen(true);
          }}
        />

        <button
          className="w-16 bg-custom-blue font-bold text-lg m-12 rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Add
        </button>
        {modalOpen && (
          <Modal
            closeModal={() => setModalOpen(false)}
            addPatient={async () => {
              await createPatient();
              setModalOpen(false);
            }}
            editPatient={(patient: User) => {
              setCurrentPatient(patient);
            }}
          />
        )}
      </div>
    </>
  );
}
