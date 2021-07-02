//============================= Redux Toolkit ================================
import { createAction } from "@reduxjs/toolkit";

const getAllContacts = createAction("contact/getAllContacts");
const submitNewContact = createAction("contact/submitNewContact");
const handleDelete = createAction("contact/handleDelete");
const filterContacts = createAction("contact/filter");

export { submitNewContact, handleDelete, filterContacts, getAllContacts };