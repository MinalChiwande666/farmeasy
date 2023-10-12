import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Crop, Home, Profile} from '../../Root/Root';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          width: '90%',
          bottom: 16,
          marginHorizontal: 17,
          backgroundColor: '#F49627',
          borderRadius: 15,
          height: 70,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <MaterialCommunityIcons name="home" color={'white'} size={size} />
            );
          },
          tabBarLabelStyle: {
            color: 'white',
            bottom:16
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Crop',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="apps" color={'white'} size={size} />
            );
          },
          tabBarLabelStyle: {
            color: 'white',
            bottom:16
          },
        }}
        name="Crop"
        component={Crop}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'favorite',
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name="bookmark" color={'white'} size={size} />;
          },
          tabBarLabelStyle: {
            color: 'white',
            bottom:16
          },
        }}
        name="favorite"
        component={Crop}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="phone-portrait" color={'white'} size={size} />
            );
          },
          tabBarLabelStyle: {
            color: 'white',
            bottom:16
          },
        }}
        name="order"
        component={Crop}
      />
      <Tab.Screen
      
        options={{
          
          tabBarLabel: 'profile',
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name="person" color={'white'} size={size} />;
          },
          tabBarLabelStyle: {
            color: 'white',
            bottom:16
          },
          
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
