import { useSelector } from 'react-redux';
import Logo from '../general/Logo';
import ThemeMode from '../general/ThemeMode';
import NavLink from './NavLink';
import TagLink from './TagLink';
import { NoteType } from '../../types/types';

function SideBar() {
  const { notes } = useSelector(
    (state: { notes: { notes: NoteType[] } }) => state.notes,
  );

  const tags = Array.from(
    new Set(notes.flatMap((note: NoteType) => note.tags)),
  );

  return (
    <div className="relative row-start-1 row-end-3 border-r-[1px] border-r-gray-300 px-5 py-9 dark:border-r-gray-700">
      <Logo />

      <nav className="mb-4 mt-14 flex flex-col gap-[6px] border-b-[1px] border-b-gray-400 pb-4 dark:border-b-gray-600">
        <NavLink path="/">All Notes</NavLink>
        <NavLink path="/archive">Archive Notes</NavLink>
      </nav>

      <div>
        <p className="mb-5 text-sm font-semibold tracking-wide text-gray-500">
          Tags
        </p>

        <ul className="flex flex-col gap-4">
          {tags.slice(0, 10).map((tag) => (
            <li key={tag}>
              <TagLink value={tag}>{tag}</TagLink>
            </li>
          ))}
        </ul>
      </div>

      <ThemeMode />
    </div>
  );
}

export default SideBar;
