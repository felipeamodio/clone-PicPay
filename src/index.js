import React from 'react';
import Navigation from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';


export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000000" />

    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
    </>
  );
}
