import React from 'react';
import { View, Text, Image, Button } from 'react-native';

// images and icons
import GiveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

// styles
import {
  Container,
  BackgroundImageContainer,
  Title,
  Description,
  ActionButton,
  ButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackgroundImageContainer
        resizeMode="contain"
        source={GiveClassesBackgroundImage}
      >
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </BackgroundImageContainer>
      <ActionButton onPress={() => navigation.goBack()}>
        <ButtonText>Tudo bem</ButtonText>
      </ActionButton>
    </Container>
  );
};

export default GiveClasses;
