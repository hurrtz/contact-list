import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Contact } from 'props';
import Contacts from 'containers/Contacts';
import { makeSelectSelectedContact } from 'containers/Contacts/selectors';
import ContactDetails from 'components/ContactDetails';
import { Link } from 'utils/router';

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
  },
});

const OverviewPage = ({ selectedContact }) => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headline}>Contacts</Text>
      <Link to="/addContact">
        <Button title="Add new contact" onPress={() => {}} />
      </Link>
    </View>
    <View style={styles.content}>
      <Contacts />
      {selectedContact && (
        <ContactDetails {...selectedContact} style={styles.details} />
      )}
    </View>
  </View>
);

OverviewPage.propTypes = {
  selectedContact: Contact,
};

const mapStateToProps = createStructuredSelector({
  selectedContact: makeSelectSelectedContact(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(OverviewPage);
