import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const heathRange = [
    {
        name: 'Underweight',
        description: 'Need to more ex...Underweight. Try to... something!',
        value: 18.5,
        color: 'yellow'
    },
    {
        name: 'Normal',
        description: 'Need to more ex...Normal. Try to... something!',
        value: 25,
        color: 'green'
    },
    {
        name: 'OverWeight',
        description: 'Need to more ex...OverWeight. Try to... something!',
        value: 30,
        color: 'red'
    },
];

const ModalBMI = ({
    modalVisible, setModalVisible, 
    bim, 
    gender, setGender, 
    height, setHeight, 
    weight: setWeight, 
    age, setAge
    }) => {
    const range = heathRange.find(item => bim <= item.value) || {
        name: 'Obese',
        description: 'Need to more ex...Obese. Try to... something!',
        value: 30,
        color: 'white'
    }
    
    
  return (
    <View style={modalVisible ? styles.centeredView : ''}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[ styles.h3, styles.mb10, styles.txtWhite]}>Your Result: </Text>
            <View style={[styles.flex1, styles.txtWhite, styles.result]}>

                <View style={[styles.flexCenterAll, styles.txtWhite]}>
                    <Text style={[{color: range.color}, styles.range]}>{range.name}</Text>
                </View>

                <View style={[styles.flexCenterAll, styles.txtWhite]}>
                    <Text style={[styles.txtWhite, styles.bimValue]}>{bim}</Text>
                </View>

                <View style={[styles.flexCenterAll, styles.txtWhite]}>
                    <Text style={[styles.txtWhite, styles.description]}>{range.description}</Text>
                </View>
            </View>
            <View style={styles.cta}>
                <TouchableHighlight
                style={[styles.btn, styles.textWhite]}
                onPress={() => {
                    setGender('male');
                    setHeight(125);
                    setAge(15);
                    setModalVisible(!modalVisible);
                    }}
                >
                <Text style={[styles.textWhite, styles.textStyle]}>Re-Caculatate</Text>
                </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </Modal>

      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)',
    paddingHorizontal: 15,
  },
  flexCenterAll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex1:{
      flex: 1
  },
  modalView: {
    width: '100%',
    flex: 1,
    margin: 20,
    color: 'white',
    borderRadius: 20,
    
  },
  result: {
    width: '100%',
    paddingVertical: 50,
    backgroundColor: '#323344',
    padding: 30,
    borderRadius: 10,
  },
  h3:{
      fontSize: 40,
  },
  mb10:{
      marginBottom: 10
  },
  txtWhite: {
      color: 'white'
  },
  btn: {
    height: 45,
    width: '100%',
    backgroundColor: '#e02354',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textTransform: "uppercase"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 24
  },
  bimValue: {
    fontSize: 70,
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: 'bold'
  },
  range: {
      fontSize: 24,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 'bold'
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
  },
  cta: {
      padding: 15,
      textTransform: 'uppercase'
  }
});

export default ModalBMI;
