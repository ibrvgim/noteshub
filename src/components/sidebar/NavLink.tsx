import { Link, useLocation } from "react-router";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function NavLink({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const location = useLocation();
  const isActive = location?.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center justify-between rounded-md py-2 pl-3 pr-2 text-sm font-semibold tracking-wide ${
        isActive
          ? "bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-gray-200"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      }`}
    >
      {children}
      {isActive && <ChevronRightIcon className="size-4" />}
    </Link>
  );
}

export default NavLink;
