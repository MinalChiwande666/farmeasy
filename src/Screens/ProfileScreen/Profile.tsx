import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {avatar} from '../../utility/imagepath';
const Profile = ({navigation}:any) => {
  const profilecard = [
    {
      id: 1,
      name: 'Dasboard',
      icon: 'bar-chart',
    },
    {
      id: 2,
      name: 'Account',
      icon: 'person',
    },
    {
      id: 3,
      name: 'Order',
      icon: 'cube',
    },
    {
      id: 4,
      name: 'Coupon',
      icon: 'code-slash',
    },
    {
      id: 5,
      name: 'Settings',
      icon: 'settings',
    },
    {
      id: 6,
      name: 'Help Center',
      icon: 'person-add',
    },
    {
      id: 7,
      name: 'Sign Out',
      icon: 'log-out',
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headcontainer}>
          <View style={styles.header}>
            <View>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={24}
              />
            </View>
            <View>
              <Text style={styles.headtxt}>Profile</Text>
            </View>
            <View onTouchStart={()=>navigation.navigate('Edit')}>
              <Feather name="edit-3" color={'black'} size={24} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.profilepiccontainer}>
          <View style={styles.imgcon}>
            <Image source={avatar} style={styles.img} />
          </View>
          <View style={styles.usernameinfo}>
            <Text style={styles.usernametxt}>Charle Jen</Text>
            <Text style={styles.userwlcmtxt}>Welcome to FarmEasy</Text>
          </View>
        </View>

        <View style={styles.cardcontainer}>
          <View style={styles.cardboxcon}>
            {profilecard.map((item, i) => (
              <View
              onTouchStart={()=>navigation.navigate(item.name)}
              style={styles.card}>
                <View style={styles.icon}>
                  <Ionicons
                    name={item.icon}
                    size={19}
                    color={item.name === 'Sign Out' ? 'red' : 'orange'}
                  />
                </View>
                <View style={styles.cardtxt}>
                  <Text style={styles.txt}>{item.name}</Text>
                </View>
                <View>
                  <Ionicons
                    name="chevron-forward"
                    size={19}
                    color={'lightgray'}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
