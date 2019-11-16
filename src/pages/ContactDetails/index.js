import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, StyleSheet } from 'react-native';
import { Contact } from 'props';
import { makeSelectSelectedContact } from 'containers/Contacts/selectors';
import ContactDetails from 'components/ContactDetails';

const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: '1rem',
    paddingTop: '1.5rem',
    borderTopColor: '#AAA',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  details: {
    marginLeft: '2rem',
    paddingLeft: '2rem',
    borderLeftColor: '#AAA',
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

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
