import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
export default class SliderC extends React.Component {
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
      <View style={styles.container}>
        <Text style={styles.text}>{String(value)}</Text>
        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
      color: 'white',
    fontSize: 50,
    textAlign: 'center'
  }
});