import React from 'react';
import {storiesOf} from '@storybook/react';
import ImageComponent from './';
import mocks from './_mocks';

storiesOf('ImageComponent',module)
    .add('default', () => (
        <div style={{maxWidth: '960px'}}>
            <ImageComponent {...mocks.props} />
        </div>
    ))
    