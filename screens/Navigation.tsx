import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GeographicalObjectList } from './GeographicalObjectList';
import { GeographicalObject } from './GeographicalObject';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  background-color: transparent; /* Set background color to transparent */
`;

export const Navigation = () => {
    const gradientBackground = (
        <LinearGradient
            colors={['rgb(195, 96, 42)', 'rgba(11, 3, 45, 1)']}
            style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
        />
    );

    return (
        <NavigationContainer>
            <Container>
                {gradientBackground}
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: '#fff',
                    }}
                >
                    <Stack.Screen
                        name="GeographicalObjectList"
                        component={GeographicalObjectList}
                        options={{ title: 'Список географических объектов' }}
                    />
                    <Stack.Screen
                        name="GeographicalObject"
                        component={GeographicalObject}
                        options={{ title: 'Детальная информация' }}
                    />
                </Stack.Navigator>
            </Container>
        </NavigationContainer>
    );
};
