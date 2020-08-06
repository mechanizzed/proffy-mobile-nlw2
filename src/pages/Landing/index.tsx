import React from 'react';
import { View, Text, Image, Button } from 'react-native';

// images and icons
import LandingImage from '../../assets/images/landing.png';
import StudyIconImage from '../../assets/images/icons/study.png';
import GiveClassesIconImage from '../../assets/images/icons/give-classes.png';
import HeartIconImage from '../../assets/images/icons/heart.png';

// styles
import {
  Container,
  ImageMain,
  Title,
  ButtonsContainer,
  Buttons,
  StudyIcon,
  ButtonsText,
  TotalConnectionsContainer,
  TotalConnectionsText,
  HeartIcon,
} from './styles';

const Landing = () => {
  return (
    <Container>
      <ImageMain source={LandingImage} />
      <Title>
        Seja bem-vindo, {'\n'}
        <Title bold>O que deseja fazer?</Title>
      </Title>

      <ButtonsContainer>
        <Buttons primary>
          <StudyIcon source={StudyIconImage} />
          <ButtonsText>Estudar</ButtonsText>
        </Buttons>
        <Buttons>
          <StudyIcon source={GiveClassesIconImage} />
          <ButtonsText>Dar aulas</ButtonsText>
        </Buttons>
      </ButtonsContainer>

      <TotalConnectionsContainer>
        <TotalConnectionsText>
          Todal de 200 conexões já realizadas
        </TotalConnectionsText>
        <HeartIcon source={HeartIconImage} />
      </TotalConnectionsContainer>
    </Container>
  );
};

export default Landing;
