const NS = 'Contacts';

export const FETCH_CONTACTS = `${NS}/fetch`;
export const SET_CONTACTS = `${NS}/set`;
export const SET_SELECTED_CONTACT = `${NS}/setSelectedContact`;

export const FETCH_CONTACTS_URL = 'https://jsonplaceholder.typicode.com/users';

export const ContactTobiasWinkler = {
  id: 'tobiaswinkler',
  name: 'Tobias Winkler',
  username: 'tobias',
  email: 'info@tobiaswinkler.berlin',
  address: {
    street: 'Dubliner Straße 10',
    suite: '1',
    city: 'Berlin',
    zipcode: '13349',
    geo: {
      lat: '52.557595',
      lng: '13.342465',
    },
  },
  phone: '+49 163 5460701',
  website: 'tobiaswinkler.berlin',
  company: {
    name: 'Tobias Winkler',
    catchPhrase: 'Frontend Development',
    bs: '',
  },
};
