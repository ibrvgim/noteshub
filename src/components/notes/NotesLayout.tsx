import { useSelector } from 'react-redux';
import NoteActions from './NoteActions';
import NoteDetails from './NoteDetails';
import NotesList from './NotesList';
import { NoteType } from '../../types/types';
import { useLocation, useSearchParams } from 'react-router';
import NoteDetailsContent from './NoteDetailsContent';
import NoteDetailsEmpty from './NoteDetailsEmpty';

function NotesLayout() {
  const location = useLocation();
  const isArchive = location?.pathname.includes('archive');
  const [searchParams] = useSearchParams();
  const currentID = searchParams.get('note') as string;
  const { notes } = useSelector(
    (state: { notes: { notes: NoteType[] } }) => state.notes,
  );
  const archivedNotes = notes.filter((note) => note.archived);

  if (!notes.length) return;
  return (
    <section className="grid grid-cols-[0.5fr_1fr_0.5fr]">
      <NotesList notes={notes} isArchive={isArchive} />
      <NoteDetails>
        {currentID ? (
          <NoteDetailsContent notes={notes} currentID={currentID} />
        ) : (
          <NoteDetailsEmpty />
        )}
      </NoteDetails>
      <NoteActions
        currentID={currentID}
        isArchive={isArchive}
        notes={notes}
        archivedNotes={archivedNotes}
      />
    </section>
  );
}

export default NotesLayout;
