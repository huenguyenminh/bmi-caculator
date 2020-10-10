/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function HeaderBMI() {
    
  return (
      <View style={styles.header}>
        <Text style={[styles.txtWhite, styles.h3]}>Bim Calculator</Text>
      </View>
  );
};

const styles = StyleSheet.create({
 txtWhite: {
   color: 'white'
  },
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(255,255,255,0.05)',
    borderBottomWidth: 5,
    borderStyle: 'solid'
  }, 
  h3: {
      textTransform: "uppercase",
      fontSize: 24,
      
      fontWeight: '500'
  }
});