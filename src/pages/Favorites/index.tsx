import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import PageHeader from '../../components/PageHeader';

// images and icons

// styles
import { Container } from './styles';

const Favorites = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />
      <Text>Teacher list</Text>
    </Container>
  );
};

export default Favorites;
