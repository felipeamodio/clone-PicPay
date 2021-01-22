import React, {useState} from 'react';
import {Switch, ScrollView} from 'react-native';
import {Wrapper, 
        Header, 
        HeaderContainer, 
        Title,
        BalanceContainer,
        Value,
        Bold,
        EyeButton,
        Info,
        Actions,
        Action,
        ActionLabel,
        UseBalance,
        UseBalanceTitle,
        PaymentMethods,
        PaymentMethodsTitle,
        Card,
        CardDetails,
        CardTitle,
        CardInfo,
        Img,
        AddButton,
        AddLabel,
        CardBody,
        UseTicketButton,
        UseTicketLabel,
        UseTicketContainer,
        Bottom
    } from './styles';
import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons';


import creditCard from '../../images/credit-card.png';

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState); //faz alternar o useState p/ true e false
    }

    function handleToggleUseBalance(){
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header colors={
                useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']
            } >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '1093,75' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#FFFFFF" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={27} color="#FFFFFF" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#FFFFFF" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>

                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>

        <ScrollView showsVerticalScrollIndicator={false}>
            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre seu cartão de crédito para poder fazer 
                            pagamentos mesmo quando não tiver salvo no seu PicPay.
                        </CardInfo>
                    </CardDetails>

                    <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>

                <UseTicketContainer>
                <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                    <UseTicketLabel>Usar código promocional</UseTicketLabel>
                </UseTicketButton>
                </UseTicketContainer>
                <Bottom />
            </PaymentMethods>
            </ScrollView>
        </Wrapper>
    );
}