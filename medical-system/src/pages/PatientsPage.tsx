import { useState } from "react";
import { Modal } from "../components/shared/Modal";
import { Table, User } from "../components/shared/Table";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../auth/firebase-config";
import useSWRMutation from "swr/mutation";

export function PatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const { trigger } = useSWRMutation("patients", postPatients);

  async function postPatients(key: string, { arg }: { arg: User }) {
    try {
      const patientsCollectionRef = collection(db, "patients");
      const docRef = await addDoc(patientsCollectionRef, arg);
      return docRef;
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  }

  const handleAddPatient = async (patient: User) => {
    await trigger(patient);
    setModalOpen(false);
  };

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
