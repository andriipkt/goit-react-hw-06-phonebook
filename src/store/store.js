import { rootReducer } from './rootReducer';
const { createStore } = require('redux');

export const store = createStore(rootReducer);
