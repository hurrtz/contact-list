import { StyleSheet } from 'react-native';
import { isDesktop } from 'utils/common';

export const COLOR_DEFAULT = '#CCC';
export const COLOR_SELECTED = '#AAA';

export default StyleSheet.create({
  item: {
    backgroundColor: COLOR_DEFAULT,
    padding: 20,
    alignItems: isDesktop ? 'flex-start' : 'center',
  },
});
