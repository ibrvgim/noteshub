import Tag from '../general/Tag';
import { NoteType } from '../../types/types';

function NoteDetailsContent({
  notes,
  currentID,
}: {
  notes: NoteType[];
  currentID: string;
}) {
  const { title, tags, description, modifiedDate } = notes?.find(
    (note: NoteType) => note.id === currentID,
  ) as NoteType;

  return (
    <>
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
    </>
  );
}

export default NoteDetailsContent;
