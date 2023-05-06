import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  tower: string;
  floor: string;
  room: string;
  dateTime: string;
  comment: string;
}

const initialState: FormState = {
  tower: '',
  floor: '',
  room: '',
  dateTime: '',
  comment: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTower: (state, action: PayloadAction<string>) => {
      state.tower = action.payload;
    },
    setFloor: (state, action: PayloadAction<string>) => {
      state.floor = action.payload;
    },
    setRoom: (state, action: PayloadAction<string>) => {
      state.room = action.payload;
    },
    setDateTime: (state, action: PayloadAction<string>) => {
      state.dateTime = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    clearForm: (state) => {
      state.tower = '';
      state.floor = '';
      state.room = '';
      state.dateTime = '';
      state.comment = '';
    },
  },
});

export const {
  setTower,
  setFloor,
  setRoom,
  setDateTime,
  setComment,
  clearForm,
} = formSlice.actions;

export default formSlice.reducer;