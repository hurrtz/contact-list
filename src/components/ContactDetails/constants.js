import { Dimensions } from 'react-native';
import { isDesktop } from 'utils/common';

const screenWidth = Math.round(Dimensions.get('window').width);

export const GRAVATAR_URL = 'https://www.gravatar.com';
export const createGravatarURL = hash =>
  `${GRAVATAR_URL}/avatar/${hash}?d=identicon&s=${
    isDesktop ? 200 : screenWidth
  }`;
