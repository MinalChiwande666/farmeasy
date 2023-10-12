import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {auth} from '../../Redux/Reducers/Authreducer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttonn from '../../components/ButtonComponent/Buttonn'
import styles from './home';
const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const clearstorage = () => {
    dispatch(auth(false));
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
