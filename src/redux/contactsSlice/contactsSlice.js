import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContactSlice: (state, { type, payload }) => {
      return [...state, payload];
    },
    deleteContactSlice: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactSlice, deleteContactSlice } = contactsSlice.actions;
export const reducerContactsSlice = contactsSlice.reducer;
