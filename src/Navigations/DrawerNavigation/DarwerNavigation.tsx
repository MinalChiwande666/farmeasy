import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../Screens/HomeScreen/Home';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import {Profile} from '../../Root/Root';
import About from '../../Screens/AboutScreen/About';
import DrawerComponent from './DrawerComponent';

const DarwerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
        drawerContent={(props)=><DrawerComponent {...props}/>}
        initialRouteName="Home"
        
        >
        <Drawer.Screen name="Home" component={BottomNavigation} />
        <Drawer.Screen name="About Us" component={About} />
      </Drawer.Navigator>
    </>
  );
};

export default DarwerNavigation;
