import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  content: {
    marginTop: '1rem',
    paddingTop: '1.5rem',
    borderTopColor: '#AAA',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1rem',
  },
  label: {
    width: 75,
  },
  required: {
    display: 'none',
    marginLeft: '0.5rem',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: '1rem',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ctaWrapper: {
    flexDirection: 'row',
    marginTop: '2rem',
  },
  inputWithError: {
    borderColor: 'red',
  },
  labelWithError: {
    color: 'red',
  },
  requiredWithError: {
    display: 'static',
    color: 'red',
  },
});
