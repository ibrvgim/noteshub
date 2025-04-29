export interface TagSlice {
  tags: string[];
}

export interface NoteType {
  id: string;
  title: string;
  description: string;
  modifiedDate: Date;
  tags: string[];
  archived: boolean;
}
