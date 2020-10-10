/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Slider} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class HeightSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }
  render() {
    const { value } = this.state;
    return (
      <View style={[styles.flex1, styles.sliderBarWrap]}>
          <Text style={[styles.txtGray, styles.h4, styles.mb10]}>Height</Text>
          <Text style={[styles.txtWhite, styles.h2, styles.mb15]}>
              {String(value)}
              <Text style={[styles.txtWhite, styles.h5]}>cm</Text>
          </Text>
          <Slider
              style={[styles.slider]}
              step={1}
              minimumValue={50}
              maximumValue={200}
              onValueChange={this.change.bind(this)}
              value={value}
              minimumTrackTintColor="#6b3b52"
              maximumTrackTintColor="#000000"
          />
      </View>
    );
  }
  
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
  sliderBarWrap:{
    backgroundColor: '#323344',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 200, 
    height: 20
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
