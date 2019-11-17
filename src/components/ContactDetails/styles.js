import { StyleSheet, Dimensions } from 'react-native';
import { isDesktop } from 'utils/common';

const screenWidth = Math.round(Dimensions.get('window').width);

const avatarDesktop = {
  width: 200,
  height: 200,
  marginLeft: '2rem',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
};

const avatarMobile = {
  width: `calc(${screenWidth}px - 2rem)`,
  height: screenWidth,
  marginTop: '1rem',
};

export default StyleSheet.create({
  header: {
    fontSize: 20,
  },
  avatar: isDesktop ? avatarDesktop : avatarMobile,
  container: {
    flexDirection: isDesktop ? 'row' : 'column',
  },
});
