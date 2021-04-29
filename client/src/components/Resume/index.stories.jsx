import React from 'react';
import Resume from './';
import mocks from './_mocks';

export default {
    title: 'Resume',
    parameters: {
        component: Resume
    }
};

export const Default = () => <Resume {...mocks.props}/>