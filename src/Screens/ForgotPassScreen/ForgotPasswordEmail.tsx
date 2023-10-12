import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './forgotpassword';
import Textinput from '../../components/TextInputComponent/Textinput';

const ForgotPasswordEmail = ({navigation}: any) => {
  const onChangeemailphone = (e: any) => {};
  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logocontainer}>
        <Text>Logo</Text>
      </View>
      {/* headtxt container */}
      <View style={styles.headcontainer}>
        <Text style={styles.headtxt}>Forgot Password?</Text>
      </View>
      {/* input container */}
      <View style={styles.inputcontainer}>
        <View style={styles.inputbox}>
          {/* <TextInput
            placeholder="Email/ Phone No"
            placeholderTextColor={'black'}
          /> */}
          <Textinput
            label={'Email/ Phone No'}
            style={{}}
            value={''}
            secureEntry={false}
            keyboardtype={'default'}
            onChange={onChangeemailphone}
          />
        </View>
      </View>
      {/* btn confirm */}
      <View style={styles.inputcontainer}>
        <TouchableOpacity
          
          onPress={() => navigation.navigate('verifyemailphone')}
          style={styles.btncontainer}>
          <Text style={styles.btntxt}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordEmail;
