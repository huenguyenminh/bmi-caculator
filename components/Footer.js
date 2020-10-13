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
  View,
  Text,TouchableOpacity
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Footer({calculateBMI, title}) {
    
  return (
      
      <TouchableOpacity 
        onPress={calculateBMI}
        style={styles.btn}>
          <Text style={[styles.h3, styles.txtWhite]}>{title}</Text>
      </TouchableOpacity>
     
  );
};

const styles = StyleSheet.create({
 txtWhite: {
   color: 'white'
  },
  
  h3: {
      textTransform: "uppercase",
      fontSize: 24,
      fontWeight: '500'
  },
  btn: {
      height: 45,
      backgroundColor: '#e02354',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginHorizontal: 15
  }
});