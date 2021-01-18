import React from 'react';
import { Container, Option, Title, Img } from './styles';
import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';


const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: '210% do CDI com liquidez diária',
        bgColor: '#172C4A',
    },

    {
        key: String(Math.random()),
        img: img9,
        title: 'Pague suas estando em qualquer lugar',
        bgColor: '#6A0159',
    },

    {
        key: String(Math.random()),
        img: img10,
        title: 'Cobre um amigo',
        bgColor: '#4139C8',
    },

    {
        key: String(Math.random()),
        img: img11,
        title: 'Você sempre seguro',
        bgColor: '#00AB4B',
    },

    {
        key: String(Math.random()),
        img: img12,
        title: 'Cadastre sua chave pix no PicPay',
        bgColor: '#BA2F76',
    },
];

export default function Tips(){
    return (
        <Container>
            {items.map((item) =>(
                <Option key={item.key} bgColor={item.bgColor}>
                <Title>{item.title}</Title>

                <Img source={item.img} />
            </Option>
            ))}
        </Container>
    );
}