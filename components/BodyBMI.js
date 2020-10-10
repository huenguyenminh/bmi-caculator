/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState}  from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GenderSelection from './GenderSelection';
import HeightSelection from './HeightSelection';
import WeightSelection from './WeightSelection';

export default function BodyBMI() {
  const [gender, setGender] = useState('male');
 
  

  return (
    <View style={styles.container}>
        <View style={[styles.flex1, styles.selectGender]}>
          <GenderSelection style={styles.flex1} gender={gender} setGender={setGender} />
        </View>
        <View style={[styles.flex1, styles.sliderBlock]}>
          <HeightSelection />
        </View>
        <View style={[styles.flex1, styles.weightAge]}>
          <WeightSelection/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtWhite: {
      color: 'white'
  },
  flex1: {
      flex: 1,
      width: '100%'
  },
  selectGender:{
    alignItems: 'center'
  },
  sliderBlock: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  weightAge: {
    paddingHorizontal: 15
  }
});