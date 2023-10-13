import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DarwerNavigation from '../DrawerNavigation/DarwerNavigation';
import {useSelector} from 'react-redux';
import { Editprofile, HelpCenter, Setting } from '../../Root/Root';

const AppStack = () => {
  const checini = useSelector((state: any) => state.Auth.login);
  const Stack = createNativeStackNavigator();

  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={DarwerNavigation} />
      <Stack.Screen name='Edit' component={Editprofile}/>
      <Stack.Screen name='Settings' component={Setting}/>
      <Stack.Screen name='Help Center' component={HelpCenter}/>
    </Stack.Navigator>
  );
};

export default AppStack;
