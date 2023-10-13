import React from 'react';
import {Text} from 'react-native';
import StackNavigation from './src/Navigations/MainNavigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DarwerNavigation from './src/Navigations/DrawerNavigation/DarwerNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/store';
import RootStack from './src/Navigations/MainNavigation/RootStack';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          {/* <StackNavigation /> */}
          <RootStack />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
