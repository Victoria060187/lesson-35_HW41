import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const contactsAdapter = createEntityAdapter();

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data.slice(0, 7);
  }
);

export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
} = contactsAdapter.getSelectors(state => state.contacts);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState(),
  reducers: {
    contactAdded: contactsAdapter.addOne,
    contactRemoved: contactsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsAsync.fulfilled, (state, action) => {
      contactsAdapter.setAll(state, action.payload);
    });
  },
});

export const { contactAdded, contactRemoved } = contactsSlice.actions;
export default contactsSlice.reducer;