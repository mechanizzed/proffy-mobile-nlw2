import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const ImageMain = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: ${(props: any) =>
    props.bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular'};
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Buttons = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: ${(props: any) => (props.primary ? '#9871f5' : '#04d361')};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
`;

export const StudyIcon = styled.Image``;

export const ButtonsText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
`;

export const TotalConnectionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const TotalConnectionsText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
`;

export const HeartIcon = styled.Image`
  margin-left: 10px;
`;
