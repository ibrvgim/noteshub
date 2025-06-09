import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    setModalWindow: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { setModalWindow } = modalSlice.actions;
export default modalSlice.reducer;
