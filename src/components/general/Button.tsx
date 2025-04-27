function Button({
  children,
  secondary = false,
  style,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  style?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const primaryValues =
    'border-violet-600 bg-violet-600 text-gray-50 hover:bg-transparent hover:text-violet-500';
  const secondaryValues =
    'border-gray-600 text-gray-600 hover:border-violet-600 hover:text-violet-500 dark:border-gray-600 dark:text-gray-400 dark:hover:border-violet-600 dark:hover:text-violet-500';
  const disabledValues =
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-gray-600 disabled:hover:dark:border-gray-600 disabled:hover:dark:text-gray-400';

  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md border-[1px] px-4 py-2 text-sm font-semibold tracking-wide ${secondary ? secondaryValues : primaryValues} ${disabledValues} ${style} transition-all`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
