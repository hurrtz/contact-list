import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import App from '../';

describe('App', () => {
  let store;
  let initialState = {};

  beforeAll(() => {
    store = configureStore(initialState);
  });

  it('renders without errors', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();

    expect(tree).toBeTruthy();
  });
});
