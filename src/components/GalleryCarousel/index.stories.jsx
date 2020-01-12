import React from 'react';
import { storiesOf } from '@storybook/react';
import GalleryCarousel from './';
import mocks from './_mocks';

storiesOf('GalleryCarousel', module).add('default', () => (
  <GalleryCarousel {...mocks.props} />
));
