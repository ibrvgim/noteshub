import NoteItem from './NoteItem';
import { NoteType } from '../../types/types';
import Button from '../general/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setModalWindow } from '../../slices/modalSlice';

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
  const { tags } = useSelector(
    (state: { tags: { tags: string[] } }) => state.tags,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-4 px-3">
        <Button
          style="justify-center"
          onClick={() => dispatch(setModalWindow())}
        >
          Create New Note
        </Button>
      </div>

      <ul className="flex flex-col overflow-auto px-3 py-4">
        {notes
          .filter((note) => {
            if (tags.length) {
              const checkTags = tags.some((tag) => note.tags.includes(tag));
              if (checkTags) return note;
            } else return note;
          })
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
