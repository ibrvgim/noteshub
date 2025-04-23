function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border-[1px] border-gray-400 bg-gray-200 px-4 text-xs font-medium capitalize dark:bg-gray-700">
      {children}
    </span>
  );
}

export default Tag;
