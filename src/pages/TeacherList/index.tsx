import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// images and icons

// styles
import { Container } from './styles';

const TeacherList = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Teacher list</Text>
    </Container>
  );
};

export default TeacherList;
