import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollList = styled.ScrollView`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 8px;
`;

export const LabelForm = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const FormInputText = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
`;

export const FormInputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const FormInputBlock = styled.View`
  width: 48%;
`;
