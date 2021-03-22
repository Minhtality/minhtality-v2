import React from 'react';
import mocks from './_mocks';
import HomepageHero from './';

export default {
    title: 'Landing Page',
    parameters: {
        component: HomepageHero,
        componentSubTitle: 'Homepage hero'
    }
}

export const Default = () => <HomepageHero {...mocks.props}/>