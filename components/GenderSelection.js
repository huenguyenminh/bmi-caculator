/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function GenderSelection({gender, setGender}) {
  return (
    <View style={styles.selectGender}>
        <TouchableOpacity 
        style={[styles.btnGender,styles.mrhalft,styles.txtWhite,{backgroundColor: gender === 'male' ? '#24263b' : '#323344'}]}
        onPress={ () => setGender('male')}
    >
            <FontAwesome5 name={'mars'} style={[styles.txtWhite, styles.iconMale]} size={70}/>
            <Text style={[styles.txtGray, styles.h4]}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity 
                style={[styles.btnGender,styles.mlhalft, styles.txtWhite,{backgroundColor: gender === 'female' ? '#24263b' : '#323344'}]}
                onPress={ () => setGender('female')}
            >
                <FontAwesome5 name={'venus'} style={[styles.txtWhite, styles.iconFemale]} size={70}/>
                <Text style={[styles.txtGray, styles.h4]}>Female</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  txtWhite: {
    color: 'white',
  },
  txtGray:{
      color: 'rgba(255,255,255,0.5)'
  },
  selectGender: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    flex: 1,

  },
  mrhalft:{
    marginRight: 7.5
  },
  mlhalft:{
    marginLeft: 7.5
  },
  h3: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '500',
  },
  btnGender: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 10,
    flex: 1,
    
  },
  iconMale: {
      marginBottom: 10,
      color: '#44beec'
  },
  iconFemale: {
    marginBottom: 10,
    color: '#ea3a1c'
    },
  h4: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '500',
  },
});
