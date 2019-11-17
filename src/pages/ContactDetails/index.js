import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Contact } from 'props';

import { makeSelectSelectedContact } from 'containers/Contacts/selectors';
import ContactDetails from 'components/ContactDetails';
import { isMobile } from 'utils/common';

import styles from './styles';

const ContactDetailsPage = ({ selectedContact, history }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headline}>Contact Details</Text>
      {isMobile && (
        <Button
          title="Back"
          onPress={event => {
            event.preventDefault();
            history.push('/'); // not sure why history.goBack() does not work here...
          }}
        />
      )}
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
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  selectedContact: makeSelectSelectedContact(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(ContactDetailsPage);
