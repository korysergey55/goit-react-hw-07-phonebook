//============================= Redux Toolkit ================================
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
 getAllContacts,
 submitNewContact,
 handleDelete,
 filterContacts,
} from "./contactFormActions";

const itemsReducer = createReducer(
 [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" }],
 {
  [getAllContacts]: (state, action) => [...action.payload],
  [submitNewContact]: (state, action) => [...state, action.payload],
  [handleDelete]: (state, action) =>
   state.filter((contact) => contact.id !== action.payload),
 }
);

const filterItemsReducer = createReducer("", {
 [filterContacts]: (_, action) => action.payload,
});

const contactFormCartReduser = combineReducers({
 items: itemsReducer,
 filter: filterItemsReducer,
});

export default contactFormCartReduser;