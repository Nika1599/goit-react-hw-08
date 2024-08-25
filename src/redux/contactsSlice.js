import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
