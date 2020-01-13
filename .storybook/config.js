import React from 'react';
import { configure, addDecorator } from '@storybook/react';
// import { Provider } from 'react-redux';
// import store from '../src/store';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

// const withProvider = story => <Provider store={store}>{story()}</Provider>;

// addDecorator(withProvider);

configure(loadStories, module);
