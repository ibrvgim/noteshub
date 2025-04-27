import { useLocation } from 'react-router';
import SearchEngine from './SearchEngine';

function Navigation() {
  const location = useLocation();
  const isArchive = location?.pathname.includes('archive');

  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 pl-6 pr-10 dark:border-b-gray-700">
      <p className="text-2xl font-extrabold tracking-wide text-gray-700 dark:text-gray-300">
        {isArchive ? 'Archive Notes' : 'All Notes'}
      </p>

      <SearchEngine />
    </div>
  );
}

export default Navigation;
