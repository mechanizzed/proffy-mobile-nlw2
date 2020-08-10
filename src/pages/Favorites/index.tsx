import React from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// images and icons

// styles
import { Container, ScrollList } from './styles';

const Favorites = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <PageHeader title="Meus Proffys favoritos" />
      <ScrollList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollList>
    </Container>
  );
};

export default Favorites;
