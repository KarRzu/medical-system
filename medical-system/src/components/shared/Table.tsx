import { ReactNode, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../auth/firebase-config";
import { useColumns } from "./columns/useColumns";
import useSWR from "swr";

export type User = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  dateBirth: string;
  delete?: ReactNode;
};

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

const deletePatient = async (patientId: string) => {
  const patientDocRef = doc(db, "patients", patientId);
  await deleteDoc(patientDocRef);
};

const editPatient = async (patientId: string, updateData: Partial<User>) => {
  const patientDocRef = doc(db, "patients", patientId);
  await updateDoc(patientDocRef, updateData);
};

export function Table() {
  const [editingPatient, setEditingPatient] = useState<User | null>(null); // Przechowywanie pacjenta, którego edytujemy
  const [formData, setFormData] = useState<Partial<User>>({});
  const columns = useColumns();
  const { data, error, isLoading, mutate } = useSWR("patients", fetchPatients);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Data loading...</div>;
  if (error) return <div>An error occurred {error.message}</div>;

  if (!data || !data.length) {
    return <div>No patients found.</div>;
  }

  const handleDelete = async (id: string) => {
    await deletePatient(id);
    mutate();
  };

  const handleEditPatient = (patient: User) => {
    setEditingPatient(patient); // Ustawienie pacjenta do edycji
    setFormData(patient); // Wypełnienie formularza danymi pacjenta
  };

  const handleSaveEdit = async () => {
    if (editingPatient && formData) {
      await editPatient(editingPatient.id, formData); //Zapisane edytowanych danych
      mutate();
      setEditingPatient(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <table className="w-full border-collapse border border-slate-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="border border-slate-300" key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
              <th className="text-center font-bold">Actions</th>
            </tr>
          ))}

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="border border-slate-300 p-4 text-center"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="border border-slate-200 p-2 flex justify-center items-center gap-4">
                  <button
                    onClick={() => handleDelete(row.original.id)}
                    className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditPatient(row.original)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formularz edycji pacjenta */}
      {editingPatient && (
        <div className="mt-4 p-4 border border-gray-300 ">
          <h2 className="text-lg font-bold mb-4">
            Edit Patient: {editingPatient.name}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveEdit();
            }}
          >
            <div className="mb-2">
              <label htmlFor="name" className="block">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="mobile" className="block">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="block">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="dateBirth" className="block">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dateBirth"
                value={formData.dateBirth || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditingPatient(null)}
              className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
