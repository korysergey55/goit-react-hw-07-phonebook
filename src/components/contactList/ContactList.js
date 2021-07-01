import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { handleDelete } from "../../redux/contactForm/contactFormActions";


const ContactList = ({ contacts, handleDelete }) => {
 return (
  <div className={styles.mainContainer}>
   <ul>
    {contacts.map((contact) => (
     <li className={styles.newContact} key={contact.id}>
      <p className={styles.newContactName}>
       {contact.name} : {contact.number}
      </p>
      <button
       type="button"
       className={styles.btn}
       onClick={() => handleDelete(contact.id)}
      >
       Delete
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
};

ContactList.propTypes = {
 filteredContacts: PropTypes.arrayOf(
  PropTypes.shape({
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
  })
 ),
 handleDelete: PropTypes.func.isRequired,
};

const getNormolizeContacts = (state) => {
 const formattedContacts = state.contacts.filter.toLowerCase().trim();
 const filteredContacts = state.contacts.items.filter((contact) =>
  contact.name.toLowerCase().includes(formattedContacts)
 );
 return filteredContacts;
};

const mapStateToProps = (state, ownProps) => ({
 contacts: getNormolizeContacts(state),
});

const mapDispatchToProps = {
 handleDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
