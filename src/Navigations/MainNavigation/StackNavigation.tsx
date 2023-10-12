import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import Home from '../../Screens/HomeScreen/Home'
import {
  ForgotPasswordEmail,
  Home,
  LoginScreen,
  VerifyEmailPhone,
  ResetPassword,
  Onboarding,
  Signup,
} from '../../Root/Root';
import Examplefloatinglabel from '../../Screens/Examplefloatinglabel';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DarwerNavigation from '../DrawerNavigation/DarwerNavigation';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const userinfo:any = useSelector((state:any)=> state.Auth.login)
  
 
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
        initialRouteName="onboarding">
        {userinfo===false ? (
          <>
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="forgotpassword"
              component={ForgotPasswordEmail}
            />
            <Stack.Screen
              name="verifyemailphone"
              component={VerifyEmailPhone}
            />
            <Stack.Screen name="resetpassword" component={ResetPassword} />
            <Stack.Screen name="signup" component={Signup} />

          </>
        ) : (
          <Stack.Screen name="Drawer" component={DarwerNavigation} />
          
        )}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
