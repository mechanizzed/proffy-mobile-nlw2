import React from 'react';
import { View, Text, Image } from 'react-native';

// images and icons
import LandingImage from '../../assets/images/landing.png';

// styles
import { Container, ImageMain, Title } from './styles';

const Landing = () => {
  return (
    <Container>
      <ImageMain source={LandingImage} />
      <Title>
        Seja bem-vindo, {'\n'}
        <Title bold>O que deseja fazer?</Title>
      </Title>
    </Container>
  );
};

export default Landing;
