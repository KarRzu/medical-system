import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { IconType } from "react-icons";
import {
  MdDashboard,
  MdLocalHospital,
  MdPeople,
  MdSettings,
} from "react-icons/md";

export function Sidebar() {
  const SIDEBAR_LINKS: {
    id: number;
    path: string;
    name: string;
    icon?: IconType;
  }[] = [
    { id: 1, path: ROUTES.dashboard, name: "Dashboard", icon: MdDashboard },
    { id: 2, path: ROUTES.patients, name: "Patients", icon: MdPeople },
    { id: 3, path: ROUTES.doctors, name: "Doctors", icon: MdLocalHospital },
    { id: 4, path: ROUTES.settings, name: "Settings", icon: MdSettings },
  ];

  return (
    <>
      <div className=" bg-custom-viollet w-1/6 h-screen">
        <ul className="mt-20">
          {SIDEBAR_LINKS.map((link) => {
            return (
              <li
                key={link.id}
                className="font-medium  py-2 px-4 hover:bg-violet-200 hover:text-indigo-500"
              >
                <Link
                  className="flex items-center justify-center md:justify-start md:space-x-2 p-2"
                  to={link.path}
                >
                  {link.icon && <link.icon />}
                  <span className="text-sm text-custom hidden md:flex">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
