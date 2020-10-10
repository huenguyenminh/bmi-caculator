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


export default function FooterBMI() {
    
  return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn}>
            <Text style={[styles.h3, styles.txtWhite]}>Calculate</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
 txtWhite: {
   color: 'white'
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  }, 
  h3: {
      textTransform: "uppercase",
      fontSize: 24,
      fontWeight: '500'
  },
  btn: {
      height: 45,
      width: '100%',
      backgroundColor: '#e02354',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
  }
});