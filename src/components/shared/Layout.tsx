import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-60 ">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
