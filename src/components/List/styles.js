import { StyleSheet } from 'react-native';
import { isDesktop } from 'utils/common';

export default StyleSheet.create({
  container: {
    width: isDesktop ? 'auto' : '100%',
  },
  firstItem: {},
  subsequentItems: {
    marginTop: '0.5rem',
  },
});
