import React from 'react';
import renderer from 'react-test-renderer';

import App from '../';

describe('App', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toBeTruthy();
  });
});
