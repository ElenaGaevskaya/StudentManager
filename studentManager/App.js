import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/Screens/screen1';
import Second from './src/Screens/screen2';
import Third from './src/Screens/screen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Fourth from './src/Screens/screen4';
import Fifth from './src/Screens/screen5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
      headerShown: false
      }}
    >
 
      <Stack.Screen
        name="Главная страница"
        component={Start}
      />
      <Stack.Screen
        name="Органайзер"
        component={Second}
      />
      <Stack.Screen
        name="Контактная информация"
        component={Third}
      />
       <Stack.Screen
        name="Расписание"
        component={Fourth}
      />
       <Stack.Screen
        name="Адреса факультетов"
        component={Fifth}
      />

       </Stack.Navigator>
      </NavigationContainer>
    
  );
}