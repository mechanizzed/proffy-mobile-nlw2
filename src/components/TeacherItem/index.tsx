import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// images and icons
import HeartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.png';

// styles
import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  ProfileInfoTitle,
  ProfileInfoSubject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  ButtonFavorite,
  ButtonContact,
  ButtonContactText,
  IconsImages,
} from './styles';

const TeacherItem = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Profile>
        <Avatar
          resizeMode="contain"
          source={{ uri: `https://github.com/mechanizzed.png` }}
        />
        <ProfileInfo>
          <ProfileInfoTitle>Luciano</ProfileInfoTitle>
          <ProfileInfoSubject>Matéria</ProfileInfoSubject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        suscipit quae modi, atque odio esse error? Et voluptate possimus optio
        illo accusantium doloribus esse similique, minus recusandae mollitia
        ipsam nesciunt.
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$: 120,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <ButtonFavorite favorited>
            {/* <IconsImages source={HeartOutlineIcon} /> */}
            <IconsImages source={UnfavoriteIcon} />
          </ButtonFavorite>
          <ButtonContact>
            <IconsImages source={WhatsAppIcon} />
            <ButtonContactText>Entrar em contato</ButtonContactText>
          </ButtonContact>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
