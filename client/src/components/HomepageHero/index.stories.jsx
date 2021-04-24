import React from 'react';
import mocks from './_mocks';
import HomepageHero from './';
import navMock from '../PageNavigation/_mocks';
import PageNavigation from '../PageNavigation';

export default {
    title: 'Landing Page',
    parameters: {
        component: HomepageHero,
        componentSubTitle: 'Homepage hero'
    }
}

export const Default = () => (
    <HomepageHero {...mocks.props}/>
);

export const WithNavigation = () => (
 <>
    <PageNavigation {...navMock.props}/>
    <HomepageHero {...mocks.props}/>
 </>  
);