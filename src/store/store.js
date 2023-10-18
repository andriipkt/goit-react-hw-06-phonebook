import { nanoid } from 'nanoid';
import { rootReducer } from './rootReducer';
const { createStore } = require('redux');

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const reducer = (state = initialContactsState, { type, payload }) => {
//   switch (type) {
//     case 'newContact':
//       return {
//         ...state,
//         contacts: state.contacts
//           ? [
//               ...state.contacts,
//               {
//                 id: nanoid(),
//                 ...payload,
//               },
//             ]
//           : {
//               id: nanoid(),
//               ...payload,
//             },
//       };

//     default:
//       return state;
//   }
// };

export const store = createStore(rootReducer);
