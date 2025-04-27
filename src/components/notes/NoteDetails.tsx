function NoteDetails({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full border-x-[1px] border-x-gray-300 px-5 py-6 dark:border-x-gray-700">
      {children}
    </div>
  );
}

export default NoteDetails;
