import { StyleSheet } from 'react-native';
import { isDesktop } from 'utils/common';

export default StyleSheet.create({
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
    marginLeft: isDesktop ? '2rem' : 0,
    paddingLeft: isDesktop ? '2rem' : 0,
    borderLeftColor: '#AAA',
    borderLeftStyle: 'solid',
    borderLeftWidth: isDesktop ? 1 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
