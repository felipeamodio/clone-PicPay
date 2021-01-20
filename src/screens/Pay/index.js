import React from 'react';
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
        Label,
        Subscription,
        OptionContainer
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
        label: 'Pagar conta',
        sub: 'Pague sua conta de luz, água, boletos bancários, etc.'
    },

    {
        key: String(Math.random()),
        img: img2,
        label: 'Pagar uma pessoa',
        sub: 'Pague todos os seus amigos que também estão no PicPay.'
    },

    {
        key: String(Math.random()),
        img: img3,
        label: 'Recarda de celular',
        sub: 'Vivo, Claro, Tim, Oi, Nextel, Algar, etc.'
    },

    {
        key: String(Math.random()),
        img: img4,
        label: 'Cobrar',
        sub: 'Cobre um amigo.'
    },

    {
        key: String(Math.random()),
        img: img5,
        label: 'PIX',
        sub: 'Pagar com pix.'
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
                {items.map((item) => (
                    <Option>
                    <OptionContainer key={item.key}>
                     <Img source={item.img} />
                     <Label>{item.label}</Label>
                     </OptionContainer>
                     <Subscription>{item.sub}</Subscription>
                 </Option>
                ))}
            </Container>
   </Wrapper>   
    </>
        );
}