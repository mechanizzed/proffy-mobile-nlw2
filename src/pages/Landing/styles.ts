import styled from 'styled-components/native';

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
  font-weight: ${(props: any) => (props.bold ? 700 : 400)};
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;