function NoteItem({
  title,
  tags,
  date,
}: {
  title: string;
  tags: string[];
  date: string;
}) {
  return (
    <div className="rounded-sm border-b-[1px] border-b-gray-300 px-3 py-4 hover:bg-gray-100 dark:border-b-gray-700 dark:hover:bg-gray-800">
      <p className="text-[15px] font-bold text-gray-700 dark:text-gray-300">
        {title}
      </p>

      <ul className="my-3 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="rounded-full border-[1px] border-gray-400 bg-gray-200 px-4 text-xs font-medium capitalize dark:bg-gray-700">
              {tag.toLowerCase()}
            </span>
          </li>
        ))}
      </ul>

      <p className="text-end text-[10px] font-semibold text-gray-500">{date}</p>
    </div>
  );
}

export default NoteItem;
