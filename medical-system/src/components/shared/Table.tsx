import { ReactNode } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/firebase-config";
import { useColumns } from "../../auth/hooks/useColumns";
import useSWR from "swr";

export type User = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  dateBirth: string;
  delete?: ReactNode;
};

export type TableProps = {
  addPatient: (newPatient: User) => void;
};

// Funkcja fetchPatients do pobierania danych pacjentów
export const fetchPatients = async () => {
  const patientsCollectionRef = collection(db, "patients");
  const users = await getDocs(patientsCollectionRef);

  return users.docs.map((doc) => {
    const docData = doc.data();
    return {
      name: docData.name || "",
      email: docData.email,
      mobile: docData.mobile || "",
      address: docData.address || "",
      dateBirth: docData.dateBirth,
    } as User;
  });
};

export function Table({ addPatient }: TableProps) {
  const columns = useColumns();
  const { data, error, isLoading } = useSWR("patients", fetchPatients);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Data loading...</div>;
  if (error) return <div>An error occurred {error.message}</div>;

  if (!data || !data.length) {
    return <div>No patients found.</div>;
  }

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
                  <button className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 transition duration-300">
                    Delete
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
