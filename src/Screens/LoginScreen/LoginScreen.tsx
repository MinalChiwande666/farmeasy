import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './login';
import {useState} from 'react';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import google from '../../assets/icons/googleicon.png';
// @ts-ignore
import facebook from '../../assets/icons/Facebook_Logo_(2019).png';
// @ts-ignore
import twitter from '../../assets/icons/twitterlogo.png';
import Textinput from '../../components/TextInputComponent/Textinput';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../Redux/Reducers/Authreducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Buttonn from '../../components/ButtonComponent/Buttonn';
const LoginScreen = ({navigation}: any) => {
  const userinfo:any = useSelector((state:any)=> state.Auth.login)
  const dispatch = useDispatch();
  const lobtnref = useRef();
  const [showpass, setshowpass] = useState<any>(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [loginform, setloginform] = useState({
    email_phone: '',
    password: '',
  });
  const loginref = useRef();
  const login = async () => {
    let ct = 0;
    if (!emailRegex.test(loginform.email_phone)) {
      ct++;
      Alert.alert('Please enter correct email');
    }
    if (loginform.password === '') {
      ct++;
      console.log('please enter your password');
    }
    if (ct === 0) {
      Alert.alert('Successfully login!');
      dispatch(auth(true));
      await AsyncStorage.setItem('auth', JSON.stringify(true));
    }
  };

  const onChangeEmail = (e: any) => {
    setloginform({
      ...loginform,
      email_phone: e,
    });
  };
  const onChangePassword = (e: any) => {
    setloginform({
      ...loginform,
      password: e,
    });
  };
  return (
    <View style={styles.container}>
      {/* header container */}
      <View style={styles.headconatiner}>
        <View style={styles.head}>
          <Text style={styles.headtxt}>Login</Text>
        </View>
      </View>
      {/* logo container */}
      <View style={styles.logocontainer}>
        <Text>FarmEasy</Text>
      </View>

      {/* loginform container */}

      <View style={styles.loginformcontainer}>
        <View style={styles.loginform}>
          <View style={styles.input}>
            <Textinput
              ref={loginref}
              value={loginform?.email_phone}
              label={'Email/ Phone No'}
              keyboardtype={'default'}
              onChange={onChangeEmail}
              style={{}}
              secureEntry={false}
            />
          </View>
          <View style={[styles.input, styles.paswordcontainer]}>
            <Textinput
              ref={loginref}
              value={loginform?.password}
              label={'Password'}
              keyboardtype={'default'}
              onChange={onChangePassword}
              style={{width: 100}}
              secureEntry={showpass}
            />
            <Pressable
              onPress={() => {
                setshowpass(!showpass);
              }}>
              <MaterialCommunityIcons
                name={'eye'}
                color={'lightgray'}
                size={24}
              />
            </Pressable>
          </View>
          <View style={styles.fpcontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('forgotpassword')}>
              <Text style={styles.fptxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Buttonn
            ref={lobtnref}
            text={'Login'}
            style={styles.btntxt}
            btnstyle={styles.btncontainer}
            onPress={login}
          />
          <View style={styles.signuptxtcontainer}>
            <Text style={styles.signuptxt}>Don't have an account?</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('signup');
              }}>
              <Text style={styles.signtxt}> Signup</Text>
            </Pressable>
          </View>
          <View style={styles.signuptxtcontainer}>
            <Text style={styles.signupor}>OR</Text>
          </View>
        </View>
      </View>

      {/* other login opt container */}
      <View style={styles.otherlogcontainer}>
        <View style={styles.optbox}>
          <Pressable style={styles.logobtn}>
            <Image source={google} style={styles.logo} />
          </Pressable>
          <Pressable style={styles.logobtn}>
            <Image source={facebook} style={styles.logo} />
          </Pressable>
          <Pressable style={styles.logobtn}>
            <Image
              source={twitter}
              style={[styles.logo, {width: 40, height: 50}]}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
