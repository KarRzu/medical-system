import { ColumnDef } from "@tanstack/react-table";
import { User } from "../Table";

export const useColumns = (): ColumnDef<User>[] => {
  const columns: ColumnDef<User>[] = [
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

  return columns;
};
