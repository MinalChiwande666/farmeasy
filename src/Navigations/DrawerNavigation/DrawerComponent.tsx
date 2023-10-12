import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {DrawerItemList} from '@react-navigation/drawer';
import styles from './drawer';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const DrawerComponent = (props: any) => {
  const [drop, setdrop] = useState<any>();
  const [open,setopen] = useState<any>(false)
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
              <TouchableOpacity onPress={() => {setdrop(item); setopen(!open)}}>
                <MaterialCommunityIcons
                  name="chevron-down"
                  color={'black'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            {drop === item && open && (
              <View style={{width:'100%',
              padding:5}}>
                {
                  <View>
                    {submenus.map((item2, i) =>
                      item === item2.name ? (
                        <View style={styles.menuitem}>
                          {
                           
                             item2.item.map((nam, i) => (
                                <Text>{nam}</Text>
                              ))
                           
                          }
                        </View>
                      ) : null,
                    )}
                  </View>
                }
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default DrawerComponent;
