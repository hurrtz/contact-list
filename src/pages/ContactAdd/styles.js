import { StyleSheet } from 'react-native';
import { isDesktop } from 'utils/common';

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
    flexDirection: isDesktop ? 'row' : 'column',
    alignItems: isDesktop ? 'center' : 'stretch',
    marginTop: '1rem',
  },
  label: {
    width: isDesktop ? 75 : '100%',
  },
  required: {
    display: 'none',
    marginLeft: isDesktop ? '0.5rem' : 0,
    marginTop: isDesktop ? 0 : '0.5em',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: isDesktop ? '1rem' : 0,
    marginTop: isDesktop ? 0 : '0.5em',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ctaWrapper: {
    flexDirection: isDesktop ? 'row' : 'column',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
