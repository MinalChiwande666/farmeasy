import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordEmail,
  LoginScreen,
  Onboarding,
  ResetPassword,
  Signup,
  VerifyEmailPhone,
} from '../../Root/Root';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="forgotpassword" component={ForgotPasswordEmail} />
        <Stack.Screen name="verifyemailphone" component={VerifyEmailPhone} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
