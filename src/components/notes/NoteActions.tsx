import { ArchiveBoxIcon, TrashIcon } from '@heroicons/react/24/outline';
import Button from '../general/Button';
import { useDispatch } from 'react-redux';
import { setArchive, setDelete } from '../../slices/notesSlice';
import { NoteType } from '../../types/types';
import { useNavigate } from 'react-router';

function NoteActions({
  currentID,
  isArchive,
}: {
  currentID: string;
  isArchive: boolean;
  notes: NoteType[];
  archivedNotes: NoteType[];
}) {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const classValues = 'size-4';

  function handleOnArchive() {
    if (isArchive) {
      dispatch(setArchive({ type: 'unarchive', currentID }));
      navigate('/archive');
    } else {
      dispatch(setArchive({ type: 'archive', currentID }));
      navigate('/');
    }
  }

  function handleOnDelete() {
    dispatch(setDelete(currentID));
    if (isArchive) {
      navigate('/archive');
    } else {
      navigate('/');
    }
  }

  return (
    <div className="mt-6 flex flex-col gap-3 px-4">
      <Button secondary onClick={handleOnArchive} disabled={!currentID}>
        <ArchiveBoxIcon className={classValues} />
        {isArchive ? 'Unarchive Note' : 'Archive Note'}
      </Button>

      <Button
        secondary
        style="hover:text-red-600 hover:border-red-700 dark:hover:text-red-600 dark:hover:border-red-700"
        onClick={handleOnDelete}
        disabled={!currentID}
      >
        <TrashIcon className={classValues} />
        Delete Note
      </Button>
    </div>
  );
}

export default NoteActions;
