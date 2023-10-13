import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DrawerItemList} from '@react-navigation/drawer';
import styles from './drawer';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const DrawerComponent = (props: any) => {
  const rotate = useSharedValue(0);
  const [index, setindex] = useState<any>();
  const [drop, setdrop] = useState<any>();
  const [open, setopen] = useState<any>(false);
  const navigation = useNavigation();
  const DrawerNav = [
    'Home',
    'About Us',
    'Our Projects',
    'Daily Updates',
    'Recent News',
    'Services',
    'Blogs',
    'Nearest Office',
    'Emergency',
  ];
  const submenus = [
    {
      name: 'Home',
      item: ['Home', 'Something'],
    },
    {
      name: 'About Us',
      item: ['About Us'],
    },
  ];

  const rotatestyle = useAnimatedStyle((): any => {
    const rot = interpolate(rotate.value, [0, 1], [0, 180], Extrapolate.CLAMP);
    return {
      padding: rot,
    };
  }, []);

 

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headtxt}>FARMEASY</Text>
        </View>
      </SafeAreaView>
      {DrawerNav.map((item, i) => (
        <View key={i} style={styles.submenucontainer}>
          <View style={styles.submenu}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={styles.submenutxt}>{item}</Text>
              <Animated.View
                style={rotatestyle}
                onTouchStart={() => {
                  setdrop(item);
                  setopen(!open);
                  setindex(i);
                }}>
                <MaterialCommunityIcons
                  name={item === drop && open ? 'chevron-up' : 'chevron-down'}
                  color={'black'}
                  size={24}
                />
              </Animated.View>
            </View>
            {drop === item && open && (
              <Animated.View style={[{width: '100%'}, rotatestyle]}>
                {
                  <View>
                    {submenus.map((item2, i) =>
                      item === item2.name ? (
                        <View style={styles.menuitem}>
                          {item2.item.map((nam, i) => (
                            <TouchableOpacity
                              onPress={() => navigation.navigate(nam)}>
                              <Text>{nam}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      ) : null,
                    )}
                  </View>
                }
              </Animated.View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default DrawerComponent;
