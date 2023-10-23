import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContactSlice: {
      prepare: ({ name, number }) => {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },

      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },

    deleteContactSlice: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactSlice, deleteContactSlice } = contactsSlice.actions;
export const reducerContactsSlice = contactsSlice.reducer;
