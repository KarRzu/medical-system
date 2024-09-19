import { ReactNode, useEffect, useState } from "react";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../auth/firebase-config";

export type User = {
  name: string;
  age: number;
  mobile: string;
  city: string;
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
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Mobile",
    accessorKey: "mobile",
  },
  {
    header: "City",
    accessorKey: "city",
  },
  {
    header: "Date Birth",
    accessorKey: "dateBirth",
  },
];

export function Table() {
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
          age: docData.age || 0,
          mobile: docData.mobile || "",
          city: docData.city || "",
          dateBirth: docData.dateBirth,
        } as User;
      });

      setData(usersList);
    };

    fetchData();
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
