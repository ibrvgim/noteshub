import NoteItem from './NoteItem';
import { NoteType } from '../../types/types';
import Button from '../general/Button';
import { useSelector } from 'react-redux';

function NotesList({
  notes,
  isArchive,
}: {
  notes: NoteType[];
  isArchive: boolean;
}) {
  const inputValue = useSelector(
    (state: { notes: { searchBy: string } }) => state.notes.searchBy,
  );

  return (
    <div>
      <div className="mt-4 px-3">
        <Button style="justify-center">Create New Note</Button>
      </div>

      <ul className="flex flex-col overflow-auto px-3 py-4">
        {notes
          .filter(
            (note) =>
              note.archived === isArchive &&
              (note.title.toLowerCase().includes(inputValue) ||
                note.description.toLowerCase().includes(inputValue) ||
                note.tags.includes(inputValue)),
          )
          .map((note: NoteType) => (
            <li key={note.id}>
              <NoteItem
                id={note.id}
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
