import React, { Fragment } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { Contact as ContactPropType } from 'props';

const ContactsList = ({ contacts }) => (
  <Fragment>
    {contacts.map(contact => (
      <Text key={contact.id}>{`Name: ${contact.name}`}</Text>
    ))}
  </Fragment>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
};

export default ContactsList;
