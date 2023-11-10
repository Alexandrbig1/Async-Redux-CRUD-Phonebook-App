import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://654d93a5cbc325355741a4b5.mockapi.io";
// const URL = "https://654d93a5cbc325355741a4b5.mockapi.io/";

// async function total() {
//   const response = await axios.get(`${URL}/contacts`);
//   console.log(response);
// }

// total();

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/contacts`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", text);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
