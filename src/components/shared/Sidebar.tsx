import { Link } from "react-router-dom";
import { SIDEBAR_LINKS } from "../features/constans/sidebarLinks";

export function Sidebar() {
  return (
    <>
      <div className=" bg-custom-viollet w-52 h-screen fixed  ">
        <ul className="mt-24">
          {SIDEBAR_LINKS.map((link) => {
            return (
              <li
                key={link.path}
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
