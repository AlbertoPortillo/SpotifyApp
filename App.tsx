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
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserState from './src/context/UserState';
import Detallesartista from './src/components/ArtistaDetalles';
import Detallesalbum from './src/components/Detallesalbum';
import ListView from './src/components/ListView';
import LoginScreen from './src/components/LoginScreen';
import MenuPrincipal from './src/components/MenuPrincipal';
import Disconneted from './src/components/Disconneted';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <UserState>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuPrincipal} />
            <Stack.Screen name="Albumes" component={ListView} />
            <Stack.Screen name="Artistas" component={ListView} />
            <Stack.Screen name="AlbumesDetalles" component={Detallesalbum} />
            <Stack.Screen name="ArtistaDetalles" component={Detallesartista} />
            <Stack.Screen name="Disconnect" component={Disconneted} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserState>
    </>

  );
};

export default App;
