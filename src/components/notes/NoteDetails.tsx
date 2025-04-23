import { useSelector } from 'react-redux';
import Tag from '../general/Tag';
import { NoteType } from '../../types/types';
import { useSearchParams } from 'react-router';

function NoteDetails() {
  const [searchParams] = useSearchParams();
  const currentID = searchParams.get('note');

  const { notes } = useSelector(
    (state: { notes: { notes: NoteType[] } }) => state.notes,
  );
  if (!notes.length) return;

  const { title, tags, description, modifiedDate } = (notes.find(
    (note: NoteType) => note.id === currentID,
  ) || notes[0]) as NoteType;

  return (
    <div className="border-x-[1px] border-x-gray-300 px-5 py-6 dark:border-x-gray-700">
      <div className="boeder-b-gray-300 border-b-2 pb-5 dark:border-b-gray-700">
        <p className="pb-4 text-xl font-bold">{title}</p>

        <div>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <p className="text-end text-xs text-gray-500">{modifiedDate}</p>
        </div>
      </div>

      <div className="pt-5">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NoteDetails;
