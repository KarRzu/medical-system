import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { fetchPatients, Table, User } from "../components/shared/Table";
import useSWR from "swr";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState<User | null>(null);
  const { mutate } = useSWR("patients", fetchPatients);

  const handleAddPatient = (patient: User) => {
    setNewPatient(patient);
    mutate();
  };

  return (
    <>
      <div className="mt-12">
        <Table addPatient={newPatient} />

        <button
          className="w-16 bg-custom-blue font-bold text-lg m-12 rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Add
        </button>
        {modalOpen && (
          <Modal
            closeModal={() => setModalOpen(false)}
            addPatient={handleAddPatient}
          />
        )}
      </div>
    </>
  );
}
