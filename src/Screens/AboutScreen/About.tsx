import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './about';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {homemain} from '../../utility/imagepath';
const About = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <MaterialCommunityIcons
                name={'arrow-left'}
                size={30}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.main}>
            <Image
              source={homemain}
              style={{width: '100%', height: 200, borderRadius: 20}}
            />
          </View>
        </View>
        {/* info */}
        <View style={styles.infocontainer}>
          <View style={styles.infobox}>
            <Text style={styles.toptxt}>About Garden</Text>
            <Text style={styles.topmidtxt}>We Are Agriculture Farm</Text>
            <View style={{marginTop: 15}}>
              <Text style={styles.topparatxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </Text>
              <Text style={styles.topparatxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </Text>
            </View>
          </View>
        </View>

        {/* rate */}
        <View style={styles.ratecontainer}>
          <View style={styles.ratebox}>
            <View style={styles.rbox}>
              <Text style={styles.numtxt}>35+</Text>
              <Text style={styles.txt}>Our Team</Text>
            </View>
            <View style={styles.rbox}>
              <Text style={styles.numtxt}>75+</Text>
              <Text style={styles.txt}>Our Shop</Text>
            </View>
            <View style={styles.rbox}>
              <Text style={styles.numtxt}>150+</Text>
              <Text style={styles.txt}>Our Brands</Text>
            </View>
          </View>
        </View>
        {/* call container */}
        <View style={styles.callcontainer}>
          <View style={styles.callbox}>
            <Text style={styles.toptxt}>Call to ask question</Text>
            <View style={styles.contactcard}>
             <View style={styles.iconbox}>
             <MaterialCommunityIcons name={"phone"} color={"orange"} size={24}/>
             </View>
             <View>
              <Text style={styles.headtxt}>Phone</Text>
              <Text style={styles.phonnotxt}>+91-9373989311</Text>
             </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
