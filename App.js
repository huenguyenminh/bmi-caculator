/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar, Alert, Modal
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './Styles/appStyle';
import BodyBMI from './components/BodyBMI';
import HeaderBMI from './components/HeaderBMI';
import Footer from './components/Footer';
import ModalBMI from './components/modal';

// const App: () => React$Node = () => {
const App = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(125);
  const [weight, setWeight] = useState(20);
  const [age, setAge] = useState(15);
  const [modalVisible, setModalVisible] = useState(false);
  const [bmi, setBmi] = useState(0);

  console.log ('Geneder:', gender, '/ Height:', height, '/ Weight:', weight, '/ Age:', age);

  function calculateBMI(){
    setBmi( (parseInt(weight) / (parseInt(height)*parseInt(height)/10000)).toFixed(2));
    console.log('bmi: ',bmi);
    // return Alert.alert('bmi:'+  bmi);
    setModalVisible(true);
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.bimApp}>
        <HeaderBMI title="BMI Caculator" height={50}/>
        <BodyBMI 
          gender={gender} setGender={setGender}
          height={height} setHeight={setHeight}
          weight={weight} setWeight={setWeight}
          age={age} setAge={setAge}
        />
        <Footer style={styles.footer} calculateBMI={calculateBMI} title="Calculate" />
        <ModalBMI 
          gender={gender} setGender={setGender}
          height={height} setHeight={setHeight}
          weight={weight} setWeight={setWeight}
          age={age} setAge={setAge}
          bim={bmi} setBmi={setBmi}
          modalVisible={modalVisible} setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </>
  );
};
export default App;
