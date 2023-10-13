import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './profile';
import {SafeAreaView} from 'react-native-safe-area-context';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {avatar} from '../../utility/imagepath';
const Editprofile = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headcontainer}>
          <View style={styles.header}>
            <View onTouchStart={()=>navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={24}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.profilepiccontainer}>
        <View style={styles.imgcon}>
          <Image source={avatar} style={styles.img} />
        </View>
      </View>
      <View style={styles.cardcontainer}>
        <View style={styles.cardboxcon}>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt2}>First Name</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt2}>Address</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt2}>Phone No</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt2}>Email</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt2}>Password</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editbtn}>
            <Text style={styles.editbtntxt}>Save Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Editprofile;
