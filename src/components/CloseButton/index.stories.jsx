import React from 'react';
import {storiesOf} from '@storybook/react';
import CloseButton from './';


storiesOf('Close Button',module)
    .add('Default', () => (
     <div style={{background: '#f9f9f9'}}>
         <p>PrimaryBlack</p>
         <CloseButton theme="PrimaryBlack" />
         <p>Secondary Black</p>
         <CloseButton theme="SecondaryBlack" />
         <p>Primary White</p>
         <CloseButton theme="PrimaryWhite" />
         <p>Secondary White</p>
         <CloseButton theme="SecondaryWhite" />
         <p>Default</p>
         <CloseButton/>  
    </div> 
    ))