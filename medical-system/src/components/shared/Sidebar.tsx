import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { IconType } from "react-icons";
import {
  MdDashboard,
  MdLocalHospital,
  MdPeople,
  MdSettings,
} from "react-icons/md";
import { FaRegCalendarPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";

export function Sidebar() {
  const SIDEBAR_LINKS: {
    id: number;
    path: string;
    name: string;
    icon?: IconType;
  }[] = [
    { id: 1, path: ROUTES.dashboard, name: "Dashboard", icon: MdDashboard },
    { id: 2, path: ROUTES.patients, name: "Patients", icon: MdPeople },
    { id: 3, path: ROUTES.doctors, name: "Doctors", icon: FaUserDoctor },
    {
      id: 4,
      path: ROUTES.laboratorist,
      name: "Laboratorist",
      icon: MdLocalHospital,
    },
    { id: 5, path: ROUTES.calendar, name: "Calendar", icon: FaRegCalendarPlus },
    { id: 6, path: ROUTES.profile, name: "Profile", icon: CgProfile },
    { id: 7, path: ROUTES.settings, name: "Settings", icon: MdSettings },
  ];

  return (
    <>
      <div className=" bg-custom-viollet w-1/6 h-screen">
        <ul className="mt-24">
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
