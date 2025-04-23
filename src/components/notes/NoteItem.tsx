import { Link } from 'react-router';
import Tag from '../general/Tag';

function NoteItem({
  id,
  title,
  tags,
  date,
}: {
  id: string;
  title: string;
  tags: string[];
  date: string;
}) {
  return (
    <Link
      to={`?note=${id}`}
      className="block rounded-sm border-b-[1px] border-b-gray-300 px-3 py-4 hover:bg-gray-100 dark:border-b-gray-700 dark:hover:bg-gray-800"
    >
      <p className="text-[15px] font-bold text-gray-700 dark:text-gray-300">
        {title}
      </p>

      <ul className="my-3 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag.toLowerCase()}</Tag>
          </li>
        ))}
      </ul>

      <p className="text-end text-[10px] font-semibold text-gray-500">{date}</p>
    </Link>
  );
}

export default NoteItem;
