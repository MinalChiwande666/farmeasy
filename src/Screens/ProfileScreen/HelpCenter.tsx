import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './profile';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {farmerlogo} from '../../utility/imagepath';
const HelpCenter = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headcontainer}>
          <View style={styles.header}>
            <View onTouchStart={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={24}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.cardcontainer}>
          <View style={styles.cardboxcon}>
            <View style={[styles.card, {padding: 9}]}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="phone"
                  size={24}
                  color={'orange'}
                />
              </View>
              <View style={[styles.cardtxt, {width: 250}]}>
                <Text style={styles.txt}>Phone</Text>
                <Text style={[styles.txt2, {fontSize: 13, color: 'lightgray'}]}>
                  9373989311
                </Text>
              </View>
            </View>
            <View style={[styles.card, {padding: 9}]}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="email"
                  size={24}
                  color={'orange'}
                />
              </View>
              <View style={[styles.cardtxt, {width: 250}]}>
                <Text style={styles.txt}>Email Us</Text>
                <Text style={[styles.txt2, {fontSize: 13, color: 'lightgray'}]}>
                  abc@gmail.com
                </Text>
              </View>
            </View>
            <View style={[styles.card, {padding: 9}]}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={24}
                  color={'orange'}
                />
              </View>
              <View style={[styles.cardtxt, {width: 250}]}>
                <Text style={styles.txt}>Email Us</Text>
                <Text style={[styles.txt2, {fontSize: 13, color: 'lightgray'}]}>
                  143 Exarcitation Gourandal USA
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.contactcontainer}>
          <View style={styles.contactbox}>
            <View style={{width: '100%'}}>
              <View style={styles.conhdtxt}>
                <Text style={styles.conftxt}>Contact Us</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={styles.desctxt}>
                  Our Team is happy to answer your Question.Fill out the form,
                  and we'll be in a touch as soon as possible
                </Text>
              </View>
            </View>
            <View style={styles.contactinfocard}>
              <Image source={farmerlogo} style={{width: 70, height: 70}} />
              <View style={styles.contactinfotxt}>
                <Text style={styles.contactmaintxt}>
                  Crop Protective Service
                </Text>
                <Text style={styles.contactparatxt}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </Text>
              </View>
            </View>
            <View style={styles.contactinfocard}>
              <Image source={farmerlogo} style={{width: 70, height: 70}} />
              <View style={styles.contactinfotxt}>
                <Text style={styles.contactmaintxt}>
                  Crop Protective Service
                </Text>
                <Text style={styles.contactparatxt}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpCenter;
