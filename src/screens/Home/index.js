import React from 'react';
import {Wrapper, Container, Header, BalanceContainer, Balance, BalanceTitle} from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Sugestions from '../../components/Sugestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';


export default function Home(){
    return (
        <Wrapper>
        <Container>
          <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />
          
            <BalanceContainer>
                <BalanceTitle>Meu saldo</BalanceTitle>
                <Balance>R$ 0,00</Balance>
            </BalanceContainer>
            <AntDesign name="gift" size={30} color="#10C86E" />
          </Header>
          <Sugestions />
          <Activities />
          <Tips />
          <Banner />
        </Container>
        </Wrapper>
    );
}