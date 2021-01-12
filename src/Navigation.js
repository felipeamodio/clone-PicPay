import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import PayButton from './components/PayButton';
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';



const Tab = createBottomTabNavigator();

const icons = { //const p/ puxar os icones, mais fácil desse modo
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }

} //após isso é colocar o screenOptions no Navigator e passar uma função


export default function Navigation(){
    return(
        <Tab.Navigator screenOptions={({route, navigation}) => ({ //quando coloca ({}) é pq estamos passando q vai retornar um objeto
            tabBarIcon: ({color, size, focused}) => {  //o color é a cor q muda quando vamos trocando as abas
                if(route.name === 'Pay'){
                    return (
                        <PayButton
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                        />
                        )
                }
                const {lib: Icon, name} = icons[route.name]
                return <Icon name={name} size={size} color={color} />
            }, 
        })}
            tabBarOptions={{ //outra propriedade do Navigator para passar os estilos
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)'
                },
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#92929c'
            }}
            >
            <Tab.Screen name="Home" 
                        component={HomeScreen} 
                        options={{
                            title: 'Início'
                        }} />

            <Tab.Screen name="Wallet" 
                        component={WalletScreen}
                        options={{
                            title: 'Carteira'
                        }} />

            <Tab.Screen name="Pay" 
                        component={PayScreen}
                        options={{
                            title: ''
                        }} />

            <Tab.Screen name="Notifications" 
                        component={PayScreen}
                        options={{
                            title: 'Notificações'
                        }} />

            <Tab.Screen name="Settings" 
                        component={PayScreen}
                        options={{
                            title: 'Ajustes'
                        }} />
        </Tab.Navigator>
    );
}