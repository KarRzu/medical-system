import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_LINKS } from "../features/constans/sidebarLinks";
import clsx from "clsx";

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-custom-viollet w-60 h-screen fixed shadow-lg flex flex-col justify-between">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold text-white">MediCare</h1>
      </div>

      <ul className="flex-1 mt-8 space-y-1 overflow-y-auto">
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={clsx(
                "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "bg-violet-700 text-white"
                  : "text-indigo-200 hover:bg-violet-300 hover:text-indigo-900"
              )}
            >
              {link.icon && <link.icon className="w-5 h-5 mr-3" />}
              <span className="hidden md:inline">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center py-6 border-t border-violet-600">
        <p className="text-xs text-indigo-200">&copy; 2024 MediCare</p>
      </div>
    </div>
  );
}
