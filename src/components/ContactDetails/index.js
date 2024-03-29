import React from 'react';
import { SectionList, Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import MD5 from 'crypto-js/md5';

import { Contact } from 'props';
import Item from './Item';
import { createGravatarURL } from './constants';

import styles from './styles';

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
        <Text key="website">
          Website:{' '}
          <a
            href={
              website.substr(0, 4) === 'http' ? website : `http://${website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </Text>,
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        style={style}
      />
      <Image
        style={styles.avatar}
        source={createGravatarURL(MD5(email.toLowerCase()))}
      />
    </View>
  );
};

ContactDetails.propTypes = {
  ...Contact.isRequired,
  style: PropTypes.number,
};

export default ContactDetails;
