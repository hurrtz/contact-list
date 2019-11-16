export const GRAVATAR_URL = 'https://www.gravatar.com';
export const createGravatarURL = hash =>
  `${GRAVATAR_URL}/avatar/${hash}?d=identicon&s=200`;
