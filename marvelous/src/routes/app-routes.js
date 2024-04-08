import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Details from '../pages/details';
import Inicial from '../pages/inicial';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Inicial'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Inicial"
                    component={Inicial} />
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='Details'
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;