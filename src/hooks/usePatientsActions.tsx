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
import { Doctor } from "../pages/ModalDoctorPage";

export function usePatientsActions() {
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
      await updateDoc(patientDocRef, arg);
    } catch (error) {
      console.log("Error editing patient:", error);
    }
  }

  async function handleCreateDoctor(key: string, { arg }: { arg: Doctor }) {
    try {
      const doctorRef = collection(db, "doctors");
      await addDoc(doctorRef, arg);
    } catch (error) {
      console.log("Error adding doctors:", error);
    }
  }

  const createPatient = useSWRMutation("patients", handleCreatePatient);
  const deletePatient = useSWRMutation("patients", handleDeletePatient);
  const editPatient = useSWRMutation("patients", handleEditPatient);
  const createDoctor = useSWRMutation("doctors", handleCreateDoctor);

  return {
    createPatient: createPatient.trigger,
    deletePatient: deletePatient.trigger,
    editPatient: editPatient.trigger,
    createDoctor: createDoctor.trigger,
  };
}
