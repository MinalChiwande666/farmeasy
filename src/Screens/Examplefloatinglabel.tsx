import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../Redux/Reducers/CounterReducer';
import Textinput from '../components/TextInputComponent/Textinput';
import Buttonn from '../components/ButtonComponent/Buttonn';
const Examplefloatinglabel = () => {
  const btnref = useRef();
  const [loginform, setloginform] = useState<any>({
    email: '',
    password: '',
  });
  const counterstate = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const handleref = useRef();
  const txtfocus = useSharedValue(0);

  const onChangeEmail = (e: any) => {
    setloginform({
      ...loginform,
      email: e,
    });
  };
  const onChangePassword = (e: any) => {
    setloginform({
      ...loginform,
      password: e,
    });
  };

  const labelstyle = useAnimatedStyle((): any => {
    const uptxt = interpolate(txtfocus.value, [0.5, 1], [10, 0], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const txtsize = interpolate(txtfocus.value, [0.5, 1], [15, 8]);
    const txtcolor = interpolate(txtfocus.value, [0.5, 1], [15, 8]);
    return {
      // top:uptxt,
      fontSize: txtsize,
      transform: [{translateY: uptxt}],
    };
  });
  const focus = () => {
    // logic here
    txtfocus.value = withTiming(1, {duration: 500});
  };
  const blur = () => {
    txtfocus.value = withTiming(0.5, {duration: 500});
  };
  const login = () => {
    Alert.alert('login');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{width: '90%', borderWidth: 1, borderColor: 'orange'}}>
        <Animated.Text style={[{position: 'absolute'}, labelstyle]}>
          Hello Label
        </Animated.Text>
        <TextInput onFocus={focus} onBlur={blur} />
      </View>
      <Text>Count : {counterstate}</Text>
      <Button
        title="increment"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button title="decreament" onPress={() => dispatch(decrement())} />

      <Textinput
        value={loginform?.email}
        keyboardtype={'none'}
        ref={handleref}
        label={'Hello'}
        style={{width: '90%', borderWidth: 1, borderColor: 'orange'}}
        onChange={onChangeEmail}
        secureEntry={true}
      />
      <Textinput
        value={loginform?.password}
        keyboardtype={'phone-pad'}
        ref={handleref}
        label={'Hello'}
        style={{width: '90%', borderWidth: 1, borderColor: 'orange'}}
        onChange={onChangePassword}
        secureEntry={false}
      />

      <Buttonn
        ref={btnref}
        text={'login'}
        style={{color: 'white', backgroundColor: 'orange',fontFamily:'Inter-Regular'}}
        onPress={login}
      />
    </View>
  );
};

export default Examplefloatinglabel;
