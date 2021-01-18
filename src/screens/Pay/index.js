import React from 'react';
import {ScrollView} from 'react-native';
import {Header, 
        MenuBar, 
        All, 
        People, 
        Local, 
        Store,
        Container,
        OptionTitle,
        Option,
        Img,
        Label
    } from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Wrapper } from '../Wallet/styles';
import img1 from '../../images/06.png';
import img2 from '../../images/10.png';
import img3 from '../../images/01.png';
import img4 from '../../images/07.png';
import img5 from '../../images/12.png';



const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Pagar conta'
    },

    {
        key: String(Math.random()),
        img: img2,
        label: 'Pagar uma pessoa'
    },

    {
        key: String(Math.random()),
        img: img3,
        label: 'Recarda de celular'
    },

    {
        key: String(Math.random()),
        img: img4,
        label: 'Cobrar'
    },

    {
        key: String(Math.random()),
        img: img5,
        label: 'Pagar com pix'
    },
]

export default function Pay(){
    return (
    <>
     <Wrapper>
        <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10C86E" />
        </Header>
            <MenuBar>
                <All>Todos</All>
                <People>Pessoas</People>
                <Local>Locais</Local>
                <Store>Store</Store>
            </MenuBar>
            <Container>
                <OptionTitle>SERVIÇOS</OptionTitle>
                <Option>
                    <Img source={img1} />
                    <Label>Pagar conta</Label>
                </Option>
            </Container>
   </Wrapper>   
    </>
        );
}