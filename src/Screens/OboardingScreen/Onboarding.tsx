import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './onboard';
// @ts-ignore
import cropping from '../../assets/images/croppingimg.jpg';
// @ts-ignore
// import cultivation from '../../assets/images/cultivation2.jpg';
// @ts-ignore
// import spray from '../../assets/images/spray.jpg';
import Animated, {interpolate, useSharedValue} from 'react-native-reanimated';
import { cultivation, spray } from '../../utility/imagepath';

const Onboarding = ({navigation}: any) => {
  const scrollx = useSharedValue(0);
  const {width} = useWindowDimensions();
  const [id, setcurrid] = useState<any>(0);
  const currref = useRef();
  const slides = [
    {
      id: 1,
      image: cropping,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
      id: 2,
      image: cultivation,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
    {
      id: 3,
      image: spray,
      title: 'Lorem ipsum dolor sit amet, consectetur',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
    },
  ];

  const Slidecom = ({item}: any) => {
    return (
      <>
        <View
          key={item.id}
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: width,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              style={{width: '90%', height: 300, borderRadius: 20}}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{width: '90%'}}>
                <Text
                  style={{fontSize: 20, color: 'black', marginVertical: 15}}>
                  {item.title}
                </Text>
                <Text
                  style={{fontSize: 15, marginVertical: 10, color: 'black'}}>
                  {item.desc}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };
  const Indicator = () => {
    return (
      <>
        <View
          style={{
            height: 100,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {slides.map((item, i) => (
                <>
                  <View
                    key={i}
                    style={{
                      height: 10,
                      width: id === i ? 20 : 10,
                      backgroundColor: id === i ? '#F49627' : 'lightgray',
                      borderRadius: 50,
                      marginHorizontal: 5,
                    }}
                  />
                </>
              ))}
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={{
                  backgroundColor: '#F49627',
                  padding: 15,
                  borderRadius: 15,
                  width: 70,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  const scroll = (e: any) => {
    setcurrid(Math.round(e.nativeEvent.contentOffset.x / width));
    scrollx.value = e.nativeEvent.contentOffset.x / width;
  };
  return (
    <View style={styles.conatiner}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Slidecom item={item} />;
        }}
        scrollEventThrottle={16}
        onScroll={scroll}
      />
      <Indicator />
    </View>
  );
};

export default Onboarding;
