import React from 'react';
import PageNavigation from './';
import mocks from './_mocks'

export default {
    title: 'Page Navigation',
    component: PageNavigation,
}

export const Default = () => <PageNavigation {...mocks.props}/>