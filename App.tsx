import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@/pages/SplashScreen';
import Game from '@/pages/Game';
import Toast from 'react-native-toast-message';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none',
            animationTypeForReplace: 'pop',
          }}>
          <Stack.Screen name="Home" component={SplashScreen} />
          <Stack.Screen name="Games" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
