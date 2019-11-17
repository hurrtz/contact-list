import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button } from 'react-native';
import { Contact } from 'props';
import Contacts from 'containers/Contacts';
import { makeSelectSelectedContact } from 'containers/Contacts/selectors';
import ContactDetails from 'components/ContactDetails';
import { Link } from 'utils/router';
import { isDesktop } from 'utils/common';

import styles from './styles';

const ContactListPage = ({ selectedContact }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headline}>Contacts</Text>
      <Link to="/new">
        <Button title="Add new contact" onPress={() => {}} />
      </Link>
    </View>
    <View style={styles.content}>
      <Contacts />
      {isDesktop && selectedContact && (
        <ContactDetails {...selectedContact} style={styles.details} />
      )}
    </View>
  </View>
);

ContactListPage.propTypes = {
  selectedContact: Contact,
};

const mapStateToProps = createStructuredSelector({
  selectedContact: makeSelectSelectedContact(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(ContactListPage);
