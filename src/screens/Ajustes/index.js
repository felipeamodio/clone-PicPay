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
  Icon,
  Title,
  Body,
  MenuContainer,
  MenuDesc,
  MenuInfo,
  MenuTitle,
  GetOutButton,
  Btn,
  Bottom
} from './styles';


const itemsCount = [
  {
    key: String(Math.random()),
    label: 'Meu PicPay',
    info: '@felipe'
  },

  {
    key: String(Math.random()),
    label: 'Meu número',
    info: '(**)*****-****'
  },
  

  {
    key: String(Math.random()),
    label: 'Meu e-mail',
    info: 'f*****@g***l.com'
  },
  

  {
    key: String(Math.random()),
    label: 'Dados pessoais',
    info: ''
  },
  

  {
    key: String(Math.random()),
    label: 'Conta bancária',
    info: ''
  },
  
  {
    key: String(Math.random()),
    label: 'Tarifas e taxas',
    info: ''
  },
  

  {
    key: String(Math.random()),
    label: 'Meus endereços',
    info: ''
  },
  

  {
    key: String(Math.random()),
    label: 'Meus favoritos',
    info: ''
  },
  

  {
    key: String(Math.random()),
    label: 'Upgrade da conta',
    info: 'Não iniciado'
  },
  

  {
    key: String(Math.random()),
    label: 'Atualizar cadastro',
    info: ''
  },
  

  {
    key: String(Math.random()),
    label: 'Meu Pix',
    info: ''
  },
  
]

const itemsPromotion = [
  {
    key: String(Math.random()),
    label: 'Usar código promocional',
    info: ''
  },

  {
    key: String(Math.random()),
    label: 'Convide seus amigos',
    info: ''
  },
]


const itemsSettings = [
  {
    key: String(Math.random()),
    label: 'Privacidade',
    info: ''
  },

  {
    key: String(Math.random()),
    label: 'Notificações',
    info: ''
  },

  {
    key: String(Math.random()),
    label: 'Contas vinculadas',
    info: ''
  },

  {
    key: String(Math.random()),
    label: 'Sobre o PicPay',
    info: ''
  },

  {
    key: String(Math.random()),
    label: 'Desativar minha conta',
    info: ''
  },
]

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

      <Body>
{/* MINHA CONTA */}
      <Title>
            MINHA CONTA
      </Title>

      {itemsCount.map((itemCount) => (
        <MenuContainer key={itemsCount.key}>
          <MenuTitle>{itemCount.label}</MenuTitle>
         <MenuDesc>
          <MenuInfo>{itemCount.info}</MenuInfo>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#FFFFFF" />
         </MenuDesc>
        </MenuContainer>
      ))}


{/* PROMOÇÕES */}
      <Title>
            PROMOÇÕES
      </Title>

        {itemsPromotion.map((itemPromo) => (
          <MenuContainer key={itemPromo.key}>
          <MenuTitle>{itemPromo.label}</MenuTitle>
         <MenuDesc>
          <MenuInfo>{itemPromo.info}</MenuInfo>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#FFFFFF" />
         </MenuDesc>
        </MenuContainer>
        ))}



{/* CONFIGURAÇÕES */}

      <Title>
            CONFIGURAÇÕES
      </Title>

        {itemsSettings.map((itemSet) => (
          <MenuContainer key={itemSet.key}>
          <MenuTitle>{itemSet.label}</MenuTitle>
         <MenuDesc>
          <MenuInfo>{itemSet.info}</MenuInfo>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#FFFFFF" />
         </MenuDesc>
        </MenuContainer>
        ))}


{/* SAIR */}

        <GetOutButton>
          <Btn>Sair da conta</Btn>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#FFFFFF" />
        </GetOutButton>

        <Bottom />

      </Body>


    </Wrapper>

   </>
  );
}