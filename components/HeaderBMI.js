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


// export default function HeaderBMI(props) {
// default parmeter :  export default function HeaderBMI({title, height = 50}) {
  export default function HeaderBMI({title, height}) {
    console.log(title, height);
    const h = height || 50;
  return (
      <View style={styles.header}>
        {/* <Text style={[styles.txtWhite, styles.h3]}>{props.title}</Text> */}
        <Text style={[styles.txtWhite, styles.h3, {height: h}]}>{title}</Text>
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