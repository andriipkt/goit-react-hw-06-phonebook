import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactSlice: {
      prepare: ({ name, number }) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },

      reducer: (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      },
    },

    deleteContactSlice: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactSlice, deleteContactSlice } = contactsSlice.actions;
export const reducerContactsSlice = contactsSlice.reducer;
