import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import notesReducer from './slices/notesSlice';

export default configureStore({
  reducer: {
    tags: tagsReducer,
    notes: notesReducer,
  },
});
