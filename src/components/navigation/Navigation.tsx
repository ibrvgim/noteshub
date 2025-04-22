import {
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useLocation } from 'react-router';

function Navigation() {
  const location = useLocation();
  const isArchive = location?.pathname.includes('archive');

  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 pl-6 pr-10 dark:border-b-gray-700">
      <p className="text-2xl font-extrabold tracking-wide text-gray-700 dark:text-gray-300">
        {isArchive ? 'Archive Notes' : 'All Notes'}
      </p>

      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-3 size-[18px] text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search by title / content / tags..."
            className="h-9 w-72 rounded-md border-[1px] border-gray-400 bg-transparent pl-9 pr-2 text-sm placeholder:text-sm placeholder:text-gray-500 dark:text-gray-300 dark:placeholder:text-gray-400"
          />
        </div>

        <button className="size-[22px] text-gray-500 transition-colors hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-500">
          <Cog6ToothIcon />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
