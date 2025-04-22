import NoteActions from './NoteActions';
import NoteDetails from './NoteDetails';
import NotesList from './NotesList';

function NotesLayout() {
  return (
    <section className="grid grid-cols-[0.5fr_1fr_0.5fr]">
      <NotesList />
      <NoteDetails />
      <NoteActions />
    </section>
  );
}

export default NotesLayout;
