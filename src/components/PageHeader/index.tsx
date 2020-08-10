import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// images and icons
import BackIconImage from '../../assets/images/icons/back.png';
import LogoImage from '../../assets/images/logo.png';

// styles
import {
  Container,
  Inside,
  TopBar,
  BackButton,
  BackButtonImage,
  Logo,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Inside>
        <TopBar>
          <BackButton
            onPress={() => navigation.navigate('Landing')}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          >
            <BackButtonImage source={BackIconImage} resizeMode="contain" />
          </BackButton>
          <Logo source={LogoImage} resizeMode="contain" />
        </TopBar>

        <Title>{title}</Title>
        {children}
      </Inside>
    </Container>
  );
};

export default PageHeader;
