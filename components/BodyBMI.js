import React  from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GenderSelection from './GenderSelection';
import HeightSelection from './HeightSelection';
import WeightSelection from './WeightSelection';
import SliderC from './Slider';
export default function BodyBMI({gender, setGender, height, setHeight, weight, setWeight, age, setAge}) {
  
  

  return (
    <View style={styles.container}>
        <View style={[styles.flex1, styles.weightAge]}>
          <WeightSelection weight={weight} setWeight={setWeight} age={age} setAge={setAge} />
        </View>
        <View style={[styles.flex1, styles.sliderBlock]}>
          <HeightSelection height={height} setHeight={setHeight}/>
        </View>
        <View style={[styles.flex1, styles.selectGender]}>
          <GenderSelection style={styles.flex1} gender={gender} setGender={setGender} />
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
    alignItems: 'center',
    paddingBottom: 15,
  },
  sliderBlock: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  weightAge: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  }
});