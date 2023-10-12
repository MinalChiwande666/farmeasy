import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './forgotpassword';

const VerifyEmailPhone = ({navigation}:any) => {
  const [timer, settimer] = useState<any>(30);
  const [starttimer, setstarttimer] = useState<any>(true);

  useEffect(() => {
    let interval: any;
    if (starttimer === true) {
        interval = setInterval(() => {
          settimer((prev: any) => prev - 1);
        }, 1000);
        if(timer === 0)
        {
          setstarttimer(false)
          settimer(30)
        }
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [timer,starttimer]);
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Text>Logo</Text>
      </View>

      {/* otp box */}
      <View style={styles.otpcontainer}>
        <View style={styles.otpbox}>
          <View>
            <Text style={styles.headtxt}>Verify Email Address</Text>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={styles.infotxt}>
              Verification code sent to minal@123gmail.com
            </Text>
          </View>
          <View style={styles.otpinput}>
            <TextInput style={styles.otpinp} />
            <TextInput style={styles.otpinp} />
            <TextInput style={styles.otpinp} />
            <TextInput style={styles.otpinp} />
          </View>
        </View>
      </View>

      {/* BTN confirm send otp */}
      <View style={styles.confirmcontainer}>
        <TouchableOpacity
        onPress={()=>{
            if(starttimer === false)
            {
                setstarttimer(true)
            }
            else
            {
                navigation.navigate('resetpassword')
            }
        }}
        style={styles.btncontainer}>
          <Text style={styles.btntxt}>{starttimer === true?"Confirm Code":"Resend Code"}</Text>
        </TouchableOpacity>
        <View style={[styles.timercontainer, {marginVertical: 7}]}>
          <Text style={styles.timertxt}>00:{timer} Resend Code</Text>
        </View>
      </View>

      {/* timer code */}
    </View>
  );
};

export default VerifyEmailPhone;
