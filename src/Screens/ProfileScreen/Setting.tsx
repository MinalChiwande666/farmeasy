import {View, Text, SafeAreaView, Switch, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './profile';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Setting = ({navigation}: any) => {
    const [enabled,setenabled] = useState<any>(false)

    useEffect(()=>{
     if(enabled === true)
     {
        Alert.alert("notification enabled")
     }else
     {
        Alert.alert("Notification disabled")
     }
    },[enabled])
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
      <View style={styles.cardcontainer}>
        <View style={styles.cardboxcon}>
          <View style={styles.card}>
            <Text style={styles.txt2}>Notifications</Text>
            <View>
              <Switch
                trackColor={{false: '#eee', true: 'orange'}}
                thumbColor={enabled ? 'white' : 'orange'}
                onValueChange={()=>{
                  setenabled(!enabled)
                }}
                ios_backgroundColor="#3e3e3e"
                value={enabled}
              />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.txt2}>Languages</Text>
            
          </View>

          <View style={styles.card}>
            <Text style={styles.txt2}>Delete Account</Text>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Setting;
