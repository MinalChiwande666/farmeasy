import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth} from '../../Redux/Reducers/Authreducer';
const RootStack = () => {
  const authcheck = useSelector((state: any) => state.Auth.login);
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  console.log(authcheck)
  useEffect(() => {
    const checkauth = async () => {
      let data: any = await AsyncStorage.getItem('login');
      let convjson = JSON.parse(data);
      if (convjson === true) {
        dispatch(auth(true));
      } else {
        dispatch(auth(false));
      }
    };
    checkauth();
  }, ['check']);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {authcheck === true ? (
        <Stack.Screen name="App" component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
