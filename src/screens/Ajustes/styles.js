import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000000;
    flex: 1;
`;

export const Header = styled.View`
    height: 260px;
`;

export const HeaderContainer = styled.View`
    background: #1E222B;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    width: 70px;
    height: 70px;
    margin-top: 18px;
`;

export const User = styled.Text`
    color: #FFFFFF;
    font-size: 27px;
    margin-top: 12px;
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
    margin-left: 20px;
`;

export const Body = styled.ScrollView``;

export const Title = styled.Text`
    color: #FFFFFF;
    font-weight: 500;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 10px;
`;

export const MenuContainer = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 10px;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    background: #1E222B;
    height: 40px;
`;

export const MenuDesc = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const MenuTitle = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
`;

export const MenuInfo = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
`;

export const GetOutButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 50px;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    background: #1E222B;
    height: 40px;
`;

export const Btn = styled.Text`
    font-size: 18px;
    color: #FF0000;
`;

export const Bottom = styled.View`
    margin-top: 40px;
`;