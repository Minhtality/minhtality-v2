import React from 'react';
import {storiesOf} from '@storybook/react';
import TestingState from './';

storiesOf('TestingState',module)
    .add('default', () => (
        <div>
            <TestingState />
        </div>
    ))
    