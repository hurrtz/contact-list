import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Text, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';

import { addContact } from 'containers/Contacts/actions';
import { CONTACT_DUMMY } from 'containers/Contacts/constants';
import { Redirect } from 'utils/router';
import { isMobile } from 'utils/common';

import styles from './styles';

const ContactAddPage = ({ handleAddContact, history }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  // for visual validation
  const [nameIsFilled, setNameIsFilled] = useState(true);
  const [usernameIsFilled, setUsernameIsFilled] = useState(true);
  const [emailIsFilled, setEmailIsFilled] = useState(true);

  const [doRedirect, setDoRedirect] = useState(false);

  const handleSubmit = () => {
    setNameIsFilled(!!name);
    setUsernameIsFilled(!!username);
    setEmailIsFilled(!!email);

    if (name && username && email) {
      handleAddContact({
        ...CONTACT_DUMMY,
        name,
        username,
        email,
        phone,
        website,
      });

      setDoRedirect(true);
    }
  };

  if (doRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headline}>Add new contact</Text>
        {isMobile && (
          <Button
            title="Back"
            onPress={event => {
              event.preventDefault();
              history.goBack();
            }}
          />
        )}
      </View>
      <View style={styles.content}>
        <View style={[styles.row, { marginTop: 0 }]}>
          <Text
            style={[styles.label, !nameIsFilled ? styles.labelWithError : null]}
          >
            Name:
          </Text>
          <TextInput
            style={[styles.input, !nameIsFilled ? styles.inputWithError : null]}
            onChangeText={setName}
            value={name}
            textContentType="name"
            autoCompleteType="name"
          />
          <Text
            style={[
              styles.required,
              !nameIsFilled ? styles.requiredWithError : null,
            ]}
          >
            required
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.label,
              !usernameIsFilled ? styles.labelWithError : null,
            ]}
          >
            Username:
          </Text>
          <TextInput
            style={[
              styles.input,
              !usernameIsFilled ? styles.inputWithError : null,
            ]}
            onChangeText={setUsername}
            value={username}
            textContentType="username"
            autoCompleteType="username"
          />
          <Text
            style={[
              styles.required,
              !usernameIsFilled ? styles.requiredWithError : null,
            ]}
          >
            required
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.label,
              !emailIsFilled ? styles.labelWithError : null,
            ]}
          >
            Email:
          </Text>
          <TextInput
            style={[
              styles.input,
              !emailIsFilled ? styles.inputWithError : null,
            ]}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCompleteType="email"
          />
          <Text
            style={[
              styles.required,
              !emailIsFilled ? styles.requiredWithError : null,
            ]}
          >
            required
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            textContentType="telephoneNumber"
            autoCompleteType="tel"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Website:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWebsite}
            value={website}
            keyboardType="url"
            textContentType="URL"
          />
        </View>
        <View style={styles.ctaWrapper}>
          <Button title="Save" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

ContactAddPage.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleAddContact: newContact => dispatch(addContact(newContact)),
  };
}

const withConnect = connect(undefined, mapDispatchToProps);

export default compose(withConnect, memo)(ContactAddPage);
