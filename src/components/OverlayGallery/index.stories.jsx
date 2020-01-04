import React from 'react';
import { storiesOf } from '@storybook/react';
import mock from './_mocks';
import OverlayGallery from './';

storiesOf('OverlayGallery', module).add('default', () => (
  <OverlayGallery {...mock.props} />
));
