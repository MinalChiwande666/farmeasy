import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './forgotpassword';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ResetPassword = ({navigation}: any) => {
  const [showpass, setshowpass] = useState<any>(true);
  const [showcpass, setshowcpass] = useState<any>(true);

  const [checkpassword, setcheckpassword] = useState({
    password: '',
    cpassword: '',
  });

  const check = () => {
    let ct = 0;
    if (checkpassword.password !== checkpassword.cpassword) {

      ct++;
      Alert.alert('Please dosent match');
    } 
    if(!checkpassword.password)
    {
      ct++
      Alert.alert('Please Enter Password')
    }
    if(!checkpassword.cpassword)
    {
      ct++
      console.log('Please Enter Confirm Password')
    }
    if(ct===0){
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Text>logo</Text>
      </View>
      <View style={styles.headcontainer}>
        <Text style={styles.headtxt}>New Password</Text>
        <Text style={[styles.infotxt, {marginVertical: 13}]}>
          Please Enter Your new Password
        </Text>
      </View>
      {/* Reset password input */}
      <View style={styles.resetpasscontainer}>
        <View style={styles.resetpasswordbox}>
          <View style={styles.resinp}>
            <TextInput
            value={checkpassword.password}
            placeholder="Password"
            onChangeText={(text)=>{
                setcheckpassword({
                    ...checkpassword,
                    password:text
                })
            }}
            secureTextEntry={showpass} />
            <Pressable
              onPress={() => {
                setshowpass(!showpass);
              }}>
              <MaterialCommunityIcons
                name="eye"
                color={'lightgray'}
                size={24}
              />
            </Pressable>
          </View>
          <View style={styles.resinp}>
            <TextInput
              value={checkpassword?.cpassword}
              placeholder="Confirm Password"
              secureTextEntry={showcpass}
              onChangeText={(text) => {
           
                  setcheckpassword({
                    ...checkpassword,
                    cpassword: text,
                  });
     
              }}
            />
            <Pressable
              onPress={() => {
                setshowcpass(!showcpass);
              }}>
              <MaterialCommunityIcons
                name="eye"
                color={'lightgray'}
                size={24}
              />
            </Pressable>
          </View>
        </View>
      </View>

      {/* reset password btn */}

      <View style={styles.resbtncontainer}>
        <TouchableOpacity onPress={() => check()} style={styles.btncontainer}>
          <Text style={styles.btntxt}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
