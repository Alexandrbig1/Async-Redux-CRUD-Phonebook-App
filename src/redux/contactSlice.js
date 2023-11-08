import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      // state.contacts.filter((item) => item.id === action.payload.id);

      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
