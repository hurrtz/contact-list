import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Contact } from 'props';
import Item from './Item';

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

const ContactDetails = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  style,
}) => {
  const data = [
    {
      title: name,
      data: [
        `ID: ${id}`,
        `Username: ${username}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Website: ${website}`,
      ],
    },
  ];

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      style={style}
    />
  );
};

ContactDetails.propTypes = {
  ...Contact.isRequired,
  style: PropTypes.number,
};

export default ContactDetails;
