import React from 'react';
import {Container, Details, Img, Title, Descriptions} from './styles';
import img13 from '../../images/13.png';

export default function Banner(){
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Descriptions>
                    Mantenha suas parceirias em dia e use o PicPay para fazer suas cobranças.
                </Descriptions>
            </Details>
            <Img source={img13} />
        </Container>
    );
}