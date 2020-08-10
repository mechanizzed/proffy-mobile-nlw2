import React from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// images and icons

// styles
import {
  Container,
  ScrollList,
  SearchForm,
  LabelForm,
  FormInputText,
  FormInputRow,
  FormInputBlock,
} from './styles';

const TeacherList = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <PageHeader title="Proffys disponíveis">
        <SearchForm>
          <LabelForm>Matéria</LabelForm>
          <FormInputText
            placeholderTextColor="#c1bccc"
            placeholder="Selecione uma matéria"
          />
          <FormInputRow>
            <FormInputBlock>
              <LabelForm>Dia</LabelForm>
              <FormInputText
                placeholderTextColor="#c1bccc"
                placeholder="Selecione uma dia"
              />
            </FormInputBlock>
            <FormInputBlock>
              <LabelForm>Horário</LabelForm>
              <FormInputText
                placeholderTextColor="#c1bccc"
                placeholder="Selecione um horário"
              />
            </FormInputBlock>
          </FormInputRow>
        </SearchForm>
      </PageHeader>
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

export default TeacherList;
