import { StyleSheet } from 'react-native';

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
