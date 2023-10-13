import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {auth} from '../../Redux/Reducers/Authreducer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttonn from '../../components/ButtonComponent/Buttonn'
import styles from './home';
import {homemain} from '../../utility/imagepath'
const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const clearstorage = async() => {
    let rem = await AsyncStorage.removeItem('login')
    if(rem === undefined)
    {
      dispatch(auth(false))
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity
              onPress={()=>navigation.openDrawer()}
              >
                <MaterialCommunityIcons
                  name={'menu'}
                  size={24}
                  color={'black'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Inter-Bold',
                  color: 'black',
                  fontSize: 24,
                }}>
                FARMEASY
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <MaterialCommunityIcons
                  name={'magnify'}
                  color={'black'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <MaterialCommunityIcons
                  name={'phone'}
                  color={'black'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* main */}

      <View style={styles.maincontainer}>
        <View style={styles.main}>
         <Image source={homemain} style={{width:'100%',height:200,borderRadius:20,opacity:0.5}}/>
         <View style={styles.maininfobox}>
          <Text style={styles.maintxt}>Indoor and Outdoor</Text>
          <Text style={styles.maintxt}>Landscape <Text style={[styles.maintxt,{color:'orange'}]}>Gardner</Text></Text>
          <View>
            <Text style={styles.mainsmalltxt}>Lorem ipsum dolor sit amet</Text>
            <Text>Lorem ipsum</Text>
          </View>
         </View>
        </View>
      </View>

      <Buttonn
      text={"Logout"}
      style={{fontFamily:'Inter-Regular',color:'white'}}
      btnstyle={{backgroundColor:'orange',width:'50%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}
      onPress={clearstorage}
      />
      {/* <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Text>Hello</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
