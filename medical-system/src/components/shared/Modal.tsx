import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../auth/firebase-config";
import { User } from "./Table";

export type ModalProps = {
  closeModal: () => void;
  addPatient: (newPatient: User) => void;
};

export function Modal({ closeModal, addPatient }: ModalProps) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    dateBirth: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPatient: User = {
      name: `${formState.firstName} ${formState.lastName}`,
      email: formState.email,
      mobile: formState.mobile,
      address: formState.address,
      dateBirth: formState.dateBirth,
    };

    console.log("New patient data", newPatient);

    // Dodaj pacjenta do Firestore
    const patientsCollectionRef = collection(db, "patients");
    await addDoc(patientsCollectionRef, newPatient);

    // Dodaj pacjenta do tabeli
    addPatient(newPatient);

    // Zamknij modal
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="fixed flex justify-center items-center w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white p-6 w-[30rem] h-[35rem] rounded-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold">Add New Patient</p>
            <button className="text-xl font-bold" onClick={closeModal}>
              x
            </button>
          </div>


          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="border w-full p-2 rounded-md"
                value={formState.firstName}

                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="border w-full p-2 rounded-md"
                value={formState.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div>

              <label htmlFor="idNumber">ID number</label>
              <input
                type="text"
                id="idNumber"
                className="border w-full p-2 rounded-md"
                value={formState.idNumber}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="dateBirth">Birth Date</label>
              <input
                type="text"
                id="dateBirth"
                className="border w-full p-2 rounded-md"
                value={formState.dateBirth}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                id="mobile"
                className="border w-full p-2 rounded-md"
                value={formState.mobile}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border w-full p-2 rounded-md"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="border w-full p-2 rounded-md"
                value={formState.address}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-blue-500 text-white p-2 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
