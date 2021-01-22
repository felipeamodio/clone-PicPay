import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import {Container, 
        Header, 
        Title,
        Card,
        CardHeader,
        Avatar,
        Description,
        Bold,
        CardBody,
        Username,
        CardFooter,
        Details,
        Value,
        Divider,
        Date,
        Actions,
        Option,
        OptionLabel   
    } from './styles';
import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou o <Bold>@felipeamodio</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username>Felipe Alves</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 26,00</Value>
                        <Divider />

                            <Feather name="lock" size={14} color="#FFFFFF" />
                            <Date>há 2 dias</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFFFFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFFFFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>
        </Container>
    );
}