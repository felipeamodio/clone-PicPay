import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {Button, Label} from './styled';
import {TouchableWithoutFeedback} from 'react-native';

export default function PayButton({onPress, focused}){
    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <Button
            colors={
                focused ? ['#FFFFFF', '#CCCCCC'] : ['#00FC6C', '#00AC4A']
            }
            start={[1, 0.2]}
        >
            <MaterialIcons name="attach-money" 
                           size={30} 
                           color={focused ? '#000000' : '#FFFFFF'} />

            <Label style={{color: '#FFFFFF'}}>Pagar</Label>
        </Button>
    </TouchableWithoutFeedback>
    );
}