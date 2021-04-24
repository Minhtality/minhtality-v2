import React from 'react';
import mocks from './_mocks';
import GridGallery from './';

export default {
    title: 'Gallery Section',
    parameters: {
        component: GridGallery,
        componentSubTitle: 'Grid Gallery'
    }
}

export const Default = () => <GridGallery {...mocks.props}/>