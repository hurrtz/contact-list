import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Contacts from 'containers/Contacts';

const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: '1rem',
    flexDirection: 'row',
  },
});

const OverviewPage = () => (
  <View>
    <Text style={styles.headline}>Contacts</Text>
    <View style={styles.content}>
      <Contacts />
    </View>
  </View>
);

export default OverviewPage;
