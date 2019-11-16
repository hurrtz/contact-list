import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View, Text } from 'react-native';
import { Contact } from 'props';
import { makeSelectSelectedContact } from 'containers/Contacts/selectors';
import ContactDetails from 'components/ContactDetails';

import styles from './styles';

const ContactDetailsPage = ({ selectedContact }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headline}>Contact Details</Text>
    </View>
    <View style={styles.content}>
      {selectedContact && (
        <ContactDetails {...selectedContact} style={styles.details} />
      )}
    </View>
  </View>
);

ContactDetailsPage.propTypes = {
  selectedContact: Contact,
};

const mapStateToProps = createStructuredSelector({
  selectedContact: makeSelectSelectedContact(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(ContactDetailsPage);
