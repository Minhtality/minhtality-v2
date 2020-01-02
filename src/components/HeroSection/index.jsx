import React from 'react';
import Styled from './index.styled';
import Carousel from '../GalleryCarousel';
const HeroSection = () => {
  return (
    <Styled.HeroSection>
      <Styled.Container>
        <Carousel>
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 1}/1800x1800'
            alt='image1'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 2}/1800x1800'
            alt='image2'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 3}/1800x1800'
            alt='image3'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 4}/1800x1800'
            alt='image4'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 5}/1800x1800'
            alt='image5'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 6}/1800x1800'
            alt='image6'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 7}/1800x1800'
            alt='image7'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 8}/1800x1800'
            alt='image8'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 9}/1800x1800'
            alt='image9'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 10}/1800x1800'
            alt='image10'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 11}/1800x1800'
            alt='image11'
          />
          <img
            className='img'
            src='https://source.unsplash.com/collection/{COLLECTION 14}/1800x1800'
            alt='image12'
          />
        </Carousel>
      </Styled.Container>
    </Styled.HeroSection>
  );
};

export default HeroSection;
