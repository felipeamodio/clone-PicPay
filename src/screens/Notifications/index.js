import React from 'react';
import {Wrapper,
        Container,
        Title,
        ConfigContainer,
        MenuBar,
        Header,
        Body,
        BodyContainer,
        Message,
        Date,
        Border        
} from './styles';

const items = [
    {
        key: String(Math.random()),
        label: 'No seu próximo pagamento à um amigo com PicPay você ganha até R$10,00 de volta. Toque aqui para saber mais.',
        date: '20 de Jan às 13h08'
    },

    {
        key: String(Math.random()),
        label: 'Pague em maquininhas e ganhe até R$10,00! Com PicPay você paga na Cielo, Rede ou Getnet e ainda ganha cashback. Saiba mais',
        date: '19 de Jan às 17h20'
    },

    {
        key: String(Math.random()),
        label: 'Pare de andar com dinheiro. Peça seu PicPay Card Débito. Toque e peça já.',
        date: '19 de Jan às 14h00'
    },

    {
        key: String(Math.random()),
        label: 'Pague com segurança. Com PicPay Card Débito você fica tranquilo, tranquilo. Solicite agora o seu.',
        date: '18 de Jan às 20h37'
    },
    {
        key: String(Math.random()),
        label: 'Você já sabe como é incrível pagar boletos com PicPay! E pra te presentear, 20% de volta do seu próximo boleto de até R$100,00. Toque para saber mais.',
        date: '18 de Jan às 16:30'
    },
]

export default function Notifications() {
 return (
   <>
    <Wrapper>
      <Container>
          <Header>
        <Title>Notificações</Title>
        <ConfigContainer>
            <MenuBar>Configurar</MenuBar>
        </ConfigContainer>
        </Header>

        <Body>
            {items.map((item) => (
                <BodyContainer key={item.key}>
                <Message>{item.label}</Message>
                <Date>{item.date}</Date>
            </BodyContainer>
            ))}
        </Body>
      </Container>
    </Wrapper>
   </>
  );
}