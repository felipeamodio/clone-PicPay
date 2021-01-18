import styled from 'styled-components/native';

export const Header = styled.Text`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 19px;
`;

export const MenuBar = styled.View`
    padding: 0 23px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const All = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    text-decoration-line: underline;
`; 

export const People = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-left: 28px;
    color: rgba(255, 255, 255, 0.7);
`; 

export const Local = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-left: 28px;
    color: rgba(255, 255, 255, 0.7);
`;  

export const Store = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-left: 28px;
    color: rgba(255, 255, 255, 0.7);
`; 

export const Container = styled.View`
    padding-left: 16px;
`;

export const OptionTitle = styled.Text`
    color: #FFFFFF;
    margin-top: 20px;
`;


export const Option = styled.TouchableOpacity`
    margin-right: 16px;
    align-items: center;
    flex-direction: row;
    margin-top: 40px;
    border: 1px solid #DCDCDC;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #FFFFFF;
`;