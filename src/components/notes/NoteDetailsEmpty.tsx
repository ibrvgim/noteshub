function NoteDetailsEmpty() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <img
        src="./images/empty_note.svg"
        alt="notes image"
        className="size-80"
        draggable={false}
      />
      <p className="mt-16 text-4xl font-bold">Select Note to See Details</p>
    </div>
  );
}

export default NoteDetailsEmpty;
