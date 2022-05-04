/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserState from './src/context/UserState';
import LoginScreen from './src/components/LoginScreen';
import MenuPrincipal from './src/components/MenuPrincipal';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <UserState>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuPrincipal} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserState>
    </>

  );
};

export default App;
