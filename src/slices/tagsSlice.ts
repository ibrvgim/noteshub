import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TagSlice } from '../types/types';

const initialState: TagSlice = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<string>) => {
      if (state.tags.includes(action.payload)) {
        state.tags = state.tags.filter((tag) => tag !== action.payload);
      } else {
        state.tags.push(action.payload);
      }
    },
  },
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;
