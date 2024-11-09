import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/firebase-config";
import { User } from "../shared/Table";

export const fetchPatients = async () => {
  const patientsCollectionRef = collection(db, "patients");
  const users = await getDocs(patientsCollectionRef);

  return users.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      name: docData.name || "",
      email: docData.email,
      mobile: docData.mobile || "",
      address: docData.address || "",
      dateBirth: docData.dateBirth,
    } as User;
  });
};

export const fetchDoctors = async () => {
  const doctorsCollectionRef = collection(db, "doctors");
  const doctors = await getDocs(doctorsCollectionRef);

  return doctors.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      ...docData,
    };
  });
};
