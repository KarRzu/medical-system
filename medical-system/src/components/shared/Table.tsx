import { ReactNode, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/firebase-config";

export type User = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  dateBirth: string;
  delete?: ReactNode;
  edit?: ReactNode;
};

const columns = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Mobile",
    accessorKey: "mobile",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Date Birth",
    accessorKey: "dateBirth",
  },
];

export function Table({ addPatient }: { addPatient: User | null }) {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const patientsCollectionRef = collection(db, "patients");
      const users = await getDocs(patientsCollectionRef);

      const usersList = users.docs.map((doc) => {
        const docData = doc.data();
        console.log(docData);
        return {
          name: docData.name || "",
          email: docData.email,
          mobile: docData.mobile || "",
          address: docData.address || "",
          dateBirth: docData.dateBirth,
        } as User;
      });

      setData(usersList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (addPatient) {
      setData((prevData) => [...prevData, addPatient]);
    }
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>
        <table className="w-full border-collapse border border-slate-400">
          {table.getHeaderGroups().map(
            (
              headerGroup // dla kazdej grupy nagłówków generowany jest nowy wiersz tabeli
            ) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="border border-slate-300" key={header.id}>
                    {flexRender(
                      //Funkcja która odpowiada za renderowanie dynamicznej zawartości nagłówków
                      header.column.columnDef.header, //Pierwszy argument to zawartość nagłówka kolumny zdefiniowana w columnDef.header
                      header.getContext() //przekazuje kontekst dla renderowania (np. dane o kolumnie, ustawienia itp.).
                    )}
                  </th>
                ))}
                <th className="text-center font-bold">Actions</th>
              </tr>
            )
          )}

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="border border-slate-300 p-4 text-center">
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
