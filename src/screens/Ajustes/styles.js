import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000000;
    flex: 1;
`;

export const Header = styled.View`
    height: 260px;
`;

export const HeaderContainer = styled.View`
    background: #F8F8FF;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    width: 70px;
    height: 70px;
`;

export const User = styled.Text`
    color: #000000;
    font-size: 27px;
    margin-top: 5px;
    font-weight: bold;
`;

export const Name = styled.Text`
    color: #A9A9A9;
    font-size: 17px;
    font-weight: 500;
    margin-top: 10px;
`;

export const LinkProfile = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

export const Icon = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LinkTitle = styled.Text`
    color: #0DB060;
    font-size: 15px;
`;