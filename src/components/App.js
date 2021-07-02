import React from "react";
import Section from "./sectipon/Section";
import ContactList from "./contactList/ContactList";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";

const App = () => {
 return (
  <>
   <Section title={"Phonebook"}>
    <ContactForm />
   </Section>

   <Section title={"Contacts"}>
    <Filter />

    <ContactList />
   </Section>
  </>
 );
};
export default App;
