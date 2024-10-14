import { ReactNode } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useColumns } from "./columns/useColumns";
import useSWR from "swr";
import { fetchPatients } from "../services/patientService";
import { usePatientsActions } from "../../hooks/usePatientsActions";

export type User = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  dateBirth: string;
  delete?: ReactNode;
};

export type TableProps = {
  onDelete: (id: string) => void;
  onEdit: (newPatient: User) => void;
};

export function Table({ onEdit }: TableProps) {
  const columns = useColumns();
  const { data, error, isLoading } = useSWR("patients", fetchPatients);

  const { deletePatient } = usePatientsActions();

  const handleDelete = (id: string) => async () => {
    await deletePatient(id);
  };

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
                    onClick={handleDelete(row.original.id)}
                    className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={onEdit}
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
    </>
  );
}
