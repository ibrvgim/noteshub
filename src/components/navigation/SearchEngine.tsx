import {
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBy } from '../../slices/notesSlice';

function SearchEngine() {
  const inputValue = useSelector(
    (state: { notes: { searchBy: string } }) => state.notes.searchBy,
  );
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-6">
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute left-3 size-[18px] text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search by title / content / tags..."
          className="h-9 w-72 rounded-md border-[1px] border-gray-400 bg-transparent pl-9 pr-2 text-sm placeholder:text-sm placeholder:text-gray-500 dark:text-gray-300 dark:placeholder:text-gray-400"
          value={inputValue}
          onChange={(event) => dispatch(setSearchBy(event.target.value))}
        />
      </div>

      <button className="size-[22px] text-gray-500 transition-colors hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-500">
        <Cog6ToothIcon />
      </button>
    </div>
  );
}

export default SearchEngine;
