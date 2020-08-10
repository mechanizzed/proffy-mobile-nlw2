import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #8257e5;
`;

export const Inside = styled.View`
  padding: 40px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(BorderlessButton)``;
export const BackButtonImage = styled.Image``;
export const Logo = styled.Image``;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0%;
`;
