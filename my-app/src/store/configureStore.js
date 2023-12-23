import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;