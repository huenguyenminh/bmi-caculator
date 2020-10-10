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
import Slider from '@react-native-community/slider';

export default function WeightSelection() {
    const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);
  return (
    <View style={[styles.flex1,styles.weightAgeBlock]}>
        <View style={[styles.flex1, styles.weightBlock]}>
            <View style={[styles.flex1, styles.itemBlock, styles.mrhalft]}>
                <Text style={[styles.h4, styles.txtGray, styles.mb10]}>Weight</Text>
                <Text style={[styles.txtWhite, styles.h2, styles.mb15]}>
                    {weight}
                </Text>
                <View style={[styles.cta]}>
                    <TouchableOpacity style={[styles.txtWhite, styles.btnCircle]}>
                        <Text style={[styles.h3, styles.txtWhite]}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.txtWhite, styles.btnCircle]}>
                        <Text style={[styles.h3, styles.txtWhite]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={[styles.flex1, styles.ageBlock, styles.mlhalft]}>
        <   View style={[styles.flex1,styles.itemBlock]}>
                <Text style={[styles.h4, styles.txtGray, styles.mb10]}>Age</Text>
                <Text style={[styles.txtWhite, styles.h2, styles.mb15]}>
                    {age}
                </Text>
                <View style={[styles.cta]}>
                    <TouchableOpacity style={[styles.txtWhite, styles.btnCircle]}>
                        <Text style={[styles.h3, styles.txtWhite]}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.txtWhite, styles.btnCircle]}>
                        <Text style={[styles.h3, styles.txtWhite]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        width: '100%'
    },
  txtWhite: {
    color: 'white',
  },
  txtGray:{
      color: 'rgba(255,255,255,0.5)'
  },
  weightAgeBlock:{
   flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  weightBlock:{
    backgroundColor: '#323344',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  itemBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageBlock:{
    backgroundColor: '#323344',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnCircle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#24263b',
    marginHorizontal: 10
  },
  h4: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '500',
  },
  h2: {
    fontSize: 50,
    fontWeight: '600',
  },
  h5: {
    fontSize: 16,
    fontWeight: '600',
  },
  mb10:{
    marginBottom: 10
  },
  mb15:{
    marginBottom: 15
  }
});
