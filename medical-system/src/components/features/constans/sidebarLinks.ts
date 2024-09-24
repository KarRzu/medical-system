import { ROUTES } from "../../../router/routes";
import {
  MdDashboard,
  MdLocalHospital,
  MdPeople,
  MdSettings,
} from "react-icons/md";
import { FaRegCalendarPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { IconType } from "react-icons";

export const SIDEBAR_LINKS: {
  path: string;
  name: string;
  icon?: IconType;
}[] = [
  { path: ROUTES.dashboard, name: "Dashboard", icon: MdDashboard },
  { path: ROUTES.patients, name: "Patients", icon: MdPeople },
  { path: ROUTES.doctors, name: "Doctors", icon: FaUserDoctor },
  {
    path: ROUTES.laboratorist,
    name: "Laboratorist",
    icon: MdLocalHospital,
  },
  { path: ROUTES.calendar, name: "Calendar", icon: FaRegCalendarPlus },
  { path: ROUTES.profile, name: "Profile", icon: CgProfile },
  { path: ROUTES.settings, name: "Settings", icon: MdSettings },
];
