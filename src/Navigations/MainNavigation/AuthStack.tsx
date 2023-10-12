import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../Root/Root';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}>
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
