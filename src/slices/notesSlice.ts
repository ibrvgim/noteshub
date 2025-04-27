import { createSlice } from '@reduxjs/toolkit';
import { NoteType } from '../types/types';

const initialState: { notes: NoteType[]; searchBy: string } = {
  notes: [
    {
      id: '001',
      title: 'React 19 New Features',
      description:
        'A summary of the latest features introduced in React 19 including use() hook and improved server components.',
      modifiedDate: '2025-03-10',
      tags: ['react', 'javascript', 'frontend'],
      archived: false,
    },
    {
      id: '002',
      title: 'Books to Read in 2025',
      description:
        'List of fiction and non-fiction books I plan to read this year.',
      modifiedDate: '2025-01-22',
      tags: ['reading', 'books', 'personal'],
      archived: true,
    },
    {
      id: '003',
      title: 'Grocery Shopping List',
      description:
        'Items to buy this weekend: milk, bread, eggs, coffee, and fruits.',
      modifiedDate: '2025-04-15',
      tags: ['shopping', 'grocery'],
      archived: false,
    },
    {
      id: '004',
      title: 'Thesis Feedback Notes',
      description:
        'Collected feedback from supervisor on the second draft of my methodology chapter.',
      modifiedDate: '2025-02-28',
      tags: ['thesis', 'research'],
      archived: true,
    },
    {
      id: '005',
      title: 'Freelancing Platform Ideas',
      description:
        'Brainstorming features that can improve decision-making for users hiring freelancers.',
      modifiedDate: '2025-03-05',
      tags: ['freelancing', 'ideas'],
      archived: false,
    },
    {
      id: '006',
      title: 'Eye Tracking Data Observations',
      description:
        'Initial impressions from reviewing gaze path data for participant 7.',
      modifiedDate: '2025-04-10',
      tags: ['eye-tracking', 'data-analysis', 'research'],
      archived: true,
    },
    {
      id: '007',
      title: 'Berlin Trip Plan',
      description:
        'Itinerary for a weekend getaway in Berlin including sightseeing and food spots.',
      modifiedDate: '2025-04-01',
      tags: ['travel', 'berlin'],
      archived: false,
    },
    {
      id: '008',
      title: 'Next.js vs Vite Performance',
      description:
        'Benchmarked app load times and hot reload speeds between Next.js and Vite setups.',
      modifiedDate: '2025-02-18',
      tags: ['performance', 'nextjs', 'vite'],
      archived: true,
    },
    {
      id: '009',
      title: 'Workout Routine April 2025',
      description: 'Weekly plan focusing on strength training and cardio.',
      modifiedDate: '2025-04-04',
      tags: ['fitness', 'routine'],
      archived: false,
    },
    {
      id: '010',
      title: 'Tailwind Color Palette Ideas',
      description:
        'Experimenting with custom Tailwind color schemes for a new portfolio design.',
      modifiedDate: '2025-03-27',
      tags: ['tailwind', 'design', 'frontend'],
      archived: true,
    },
  ],
  searchBy: '',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.notes = action.payload;
    },

    setArchive: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.currentID) {
          return {
            ...note,
            archived: action.payload.type === 'archive' ? true : false,
          };
        } else return note;
      });
    },

    setDelete: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    setSearchBy: (state, action) => {
      state.searchBy = action.payload;
    },
  },
});

export const { setNote, setArchive, setDelete, setSearchBy } =
  notesSlice.actions;
export default notesSlice.reducer;
