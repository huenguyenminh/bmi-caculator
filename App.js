/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BodyBMI from './components/BodyBMI';
import HeaderBMI from './components/HeaderBMI';
import FooterBMI from './components/FooterBMI';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.bimApp}>
        <HeaderBMI/>
        <BodyBMI/>
        <FooterBMI/>
        {/* <FontAwesome5 name={'comments'} size={30} style={styles.icon}/> */}
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bimApp: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'space-between'
  },
  icon:{
    color: 'white'
  }
  
});

export default App;
