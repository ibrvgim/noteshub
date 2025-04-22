import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '../../slices/tagsSlice';
import { TagIcon as TagIconOutline } from '@heroicons/react/24/outline';
import { TagIcon as TagIconSolid } from '@heroicons/react/24/solid';

function TagLink({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const selector = useSelector(
    (state: { tags: { tags: string[] } }) => state.tags.tags,
  );
  const dispatch = useDispatch();
  const isActive = selector.includes(value);
  const classValues = 'size-[18px]';

  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md pl-2 text-sm font-semibold capitalize tracking-wide text-gray-600 transition-all hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 ${
        isActive
          ? 'font-bold text-violet-600 dark:text-violet-400'
          : 'hover:font-bold'
      }`}
      onClick={() => dispatch(setTags(value))}
    >
      {isActive ? (
        <TagIconSolid className={classValues} />
      ) : (
        <TagIconOutline className={classValues} />
      )}
      {children}
    </button>
  );
}

export default TagLink;
