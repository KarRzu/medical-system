import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table, User } from "../components/shared/Table";
import useSWR from "swr";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../auth/firebase-config";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState<User | null>(null);

  const postPatients = async () => {
    try {
      const patientsCollectionRef = collection(db, "patients");
      const docRef = await addDoc(patientsCollectionRef, newPatient);

      console.log("Patient added successfully");
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  };

  const { mutate } = useSWR("patients", postPatients);

  const handleAddPatient = (patient: User) => {
    setNewPatient(patient);
    postPatients();
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
