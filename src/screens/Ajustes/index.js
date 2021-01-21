import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Img,
  User,
  Name,
  LinkProfile,
  LinkTitle,
  Icon
} from './styles';



export default function Notifications() {
 return (
   <>
    <Wrapper>
      <Header>
        <HeaderContainer>
          <Img source={avatar} />
          <User>@felipe</User>
          <Name>Felipe Alves</Name>
          <LinkProfile>
          <Icon>
          <LinkTitle>Ver meu perfil</LinkTitle>  
          <MaterialIcons name="keyboard-arrow-right" size={27} color="#0DB060" />
          </Icon>
          </LinkProfile>
        </HeaderContainer>
      </Header>
    </Wrapper>

   </>
  );
}