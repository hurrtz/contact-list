import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Contact as ContactPropType } from 'props';
import List from 'components/List';
import { fetchContacts } from './actions';
import { makeSelectContacts } from './selectors';

const Contacts = ({ doFetchContacts, contacts }) => {
  useEffect(() => {
    doFetchContacts();
  }, []);

  return <List items={contacts} />;
};

Contacts.propTypes = {
  doFetchContacts: PropTypes.func,
  contacts: PropTypes.arrayOf(ContactPropType),
};

const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doFetchContacts: () => dispatch(fetchContacts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Contacts);
