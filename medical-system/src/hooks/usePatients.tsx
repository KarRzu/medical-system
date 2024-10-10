import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../auth/firebase-config";
import useSWRMutation from "swr/mutation";
import { User } from "../components/shared/Table";

export function usePatients() {
  async function handleCreatePatient(key: string, { arg }: { arg: User }) {
    try {
      const patientsCollectionRef = collection(db, "patients");
      await addDoc(patientsCollectionRef, arg);
    } catch (error) {
      console.log("Error adding patient:", error);
    }
  }

  async function handleDeletePatient(key: string, { arg }: { arg: string }) {
    try {
      const patientDocRef = doc(db, "patients", arg);
      await deleteDoc(patientDocRef);
    } catch (error) {
      console.log("Error deleting patient:", error);
    }
  }

  async function handleEditPatient(key: string, { arg }: { arg: User }) {
    try {
      const patientDocRef = doc(db, "patients", arg.id);
      await updateDoc(patientDocRef, {
        name: arg.name,
        email: arg.email,
        mobile: arg.mobile,
        address: arg.address,
        dateBirth: arg.dateBirth,
      });
    } catch (error) {
      console.log("Error deleting patient:", error);
    }
  }

  const createPatient = useSWRMutation("patients", handleCreatePatient);
  const deletePatient = useSWRMutation("patients", handleDeletePatient);
  const editPatient = useSWRMutation("patients", handleEditPatient);

  return {
    createPatient: createPatient.trigger,
    deletePatient: deletePatient.trigger,
    editPatient: editPatient.trigger,
  };
}
