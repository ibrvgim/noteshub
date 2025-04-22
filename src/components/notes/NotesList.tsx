import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';
import { NoteType } from '../../types/types';
import { useLocation } from 'react-router';

function NotesList() {
  const location = useLocation();
  const isArchive = location?.pathname.includes('archive');
  const { notes } = useSelector(
    (state: { notes: { notes: NoteType[] } }) => state.notes,
  );

  return (
    <div>
      <ul className="flex flex-col px-2 py-4">
        {notes
          .filter((note) => note.archived === isArchive)
          .map((note: NoteType) => (
            <li key={note.id}>
              <NoteItem
                title={note.title}
                tags={note.tags}
                date={note.modifiedDate}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NotesList;
