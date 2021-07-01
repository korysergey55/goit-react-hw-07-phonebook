import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/contactForm/contactFormActions";

const Filter = ({ filter, filterContacts }) => {
 return (
  <div className={styles.mainContainer}>
   <div className={styles.inputContainer}>
    <label className={styles.labelName} htmlFor="filter">
     Find contact by name
    </label>
    <input
     onChange={filterContacts}
     type="text"
     name="filter"
     id="filter"
     value={filter}
     className={styles.inputName}
    ></input>
   </div>
  </div>
 );
};

Filter.propTypes = {
 filter: PropTypes.string,
 filterContacts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
 filter: state.contacts.filter,
});

const mapDispatchToProps = {
 filterContacts: (evt) => filterContacts(evt.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
