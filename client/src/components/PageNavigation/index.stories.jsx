import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './';
import mocks from './_mocks';

storiesOf('PageNavigation', module).add('default', () => (
  <NavBar {...mocks.props} />
));
