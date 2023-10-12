import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  interpolate,
  Extrapolate,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
interface Iputprops {
  label: String;
  style: any;
  onChange: (value: String) => void;
  keyboardtype: String;
  secureEntry: boolean;
  value: any;
}
const Textinput = React.forwardRef<any, Iputprops>((props, ref) => {
  const {label, onChange, style, keyboardtype, secureEntry, value} = props;
  console.log(value);
  const [focused, setfocus] = useState<any>('');
  const [blured, setblured] = useState<any>('');

  const labeltxt = useSharedValue(0);

  const labelstyle = useAnimatedStyle((): any => {
    const txt = interpolate(labeltxt.value, [0, 1, 2], [10, -20, 0]);
    const txtcolor = interpolate(labeltxt.value, [0, 1, 2], [1, 0.4, 0.4]);
    const txtsize = interpolate(labeltxt.value,[0,1],[15,13])
    return {
      backgroundColor:'white',
      color: labeltxt.value === 0 ? 'black' : 'orange',
      // opacity: txtcolor,
      fontSize:txtsize,
      transform: [{translateY: txt}],
    };
  });
  const focus = () => {
    setfocus('focus');
    labeltxt.value = withTiming(1, {duration: 300});
  };
  const blur = () => {

    if (value === '') {
      labeltxt.value = withTiming(0, {duration: 300});
    }
  };

  useEffect(() => {
    if (value !== '' || focused === 'focus') {
      labeltxt.value = withTiming(1, {duration: 300});
    }
  }, [value,  focused]);
  return (
    <View>
      <Animated.Text style={[{position: 'absolute'}, labelstyle]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        keyboardType={keyboardtype}
        style={style}
        onChangeText={onChange}
        ref={ref}
        secureTextEntry={secureEntry}
        onFocus={focus}
        onBlur={blur}
      />
    </View>
  );
});

export default Textinput;
