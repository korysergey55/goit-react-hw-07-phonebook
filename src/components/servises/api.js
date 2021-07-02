import axios from "axios";

const BASE_URL = "http://localhost:3000/contacts";

export const getAllContactsApi = async () => {
 try {
  const response = await axios.get(BASE_URL);
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const addNewContactApi = async (newContact) => {
 try {
  const response = await axios.post(BASE_URL, newContact);
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const deleteContactApi = async (id) => {
 try {
  const response = axios.delete(`${BASE_URL}/${id}`);
  return response;
 } catch (error) {
  console.log(error);
 }
};


export const filterContactApi = async (id) => {
 try {
  const response = axios.get(`${BASE_URL}/${id}`);
  return response;
 } catch (error) {
  console.log(error);
 }
};
