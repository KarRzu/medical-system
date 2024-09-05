import { ReactNode } from "react";

export type Row = {
  id: number;
  profile: string;
  name: string;
  age: number;
  mobile: string;
  city: string;
  dateBirth: string;
  delete: ReactNode;
  edit: ReactNode;
};

export type TableProps = {
  rows: Row[];
  deleteRow: (targetIndex: number) => void;
};

export function Table({ rows, deleteRow }: TableProps) {
  return (
    <>
      <div>
        <table className="w-full border-collapse border border-slate-400">
          <thead className="bg-custom-black text-white">
            <tr>
              <th className="border border-slate-300 p-2">#</th>
              <th className="border border-slate-300">Profile</th>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Age</th>
              <th className="border border-slate-300">Moblie</th>
              <th className="border border-slate-300">City</th>
              <th className="border border-slate-300">Date Birth</th>
              <th className="border border-slate-300">Option</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index: number) => {
              return (
                <tr key={index}>
                  <td className="border border-slate-300 p-4">{row.id}</td>
                  <td className="border border-slate-300 p-4">{row.profile}</td>
                  <td className="border border-slate-300 p-4">{row.name}</td>
                  <td className="border border-slate-300 p-4">{row.age}</td>
                  <td className="border border-slate-300 p-4">{row.mobile}</td>
                  <td className="border border-slate-300 p-4">{row.city}</td>
                  <td className="border border-slate-300 p-4">
                    {row.dateBirth}
                  </td>
                  <td className="border border-slate-300 p-4">
                    <div className="flex justify-center items-center gap-6">
                      <button onClick={() => deleteRow(row.id)}>
                        {row.delete}
                      </button>
                      <button> {row.edit}</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
