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
 setLoader,
} from "./contactFormActions";

export const getAllContactsOperation = (contact) => async (dispatch) => {
 try {
  dispatch(setLoader());
  const response = await getAllContactsApi(contact);
  dispatch(getAllContacts(response.data));
  dispatch(setLoader());
 } catch (error) {
  console.log(error);
 }
};

export const addContactOperation = (contact) => async (dispatch) => {
 try {
  dispatch(setLoader());
  const response = await addNewContactApi(contact);
  dispatch(submitNewContact(response.data));
  dispatch(setLoader());
 } catch (error) {
  console.log(error);
 }
};

export const deleteContactOperation = (id) => async (dispatch) => {
 try {
  dispatch(setLoader());
  await deleteContactApi(id);
  dispatch(handleDelete(id));
  dispatch(setLoader());
 } catch (error) {
  console.log(error);
 }
};
