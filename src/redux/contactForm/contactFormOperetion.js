import {
 getAllContactsApi,
 addNewContactApi,
 deleteContactApi,
 filterContactApi,
} from "../../components/servises/api";

import {
 getAllContacts,
 submitNewContact,
 handleDelete,
 filterContacts,
} from "./contactFormActions";


export const getAllContactsOperation = (contact) => async (dispatch) => {
 try {
  const response = await getAllContactsApi(contact);
  dispatch(getAllContacts(response.data));
 } catch (error) {
  console.log(error);
 }
};

export const addContactOperation = (contact) => async (dispatch) => {
 try {
  const response = await addNewContactApi(contact);
  dispatch(submitNewContact(response.data));
 } catch (error) {
  console.log(error);
 }
};

export const deleteContactOperation = (id) => async (dispatch) => {
 try {
  await deleteContactApi(id);
  dispatch(handleDelete(id));
 } catch (error) {
  console.log(error);
 }
};
