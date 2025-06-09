import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from './slices/tagsSlice';
import notesReducer from './slices/notesSlice';
import modalReducer from './slices/modalSlice';

export default configureStore({
  reducer: {
    tags: tagsReducer,
    notes: notesReducer,
    modalWindow: modalReducer,
  },
});
