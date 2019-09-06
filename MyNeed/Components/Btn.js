import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class Btn extends Component {
  state = {title: 'Home'};
  data1 = () => {
    this.setState({title: 'Screen1 data'});
  };
  data2 = () => {
    this.setState({title: 'Screen2 data'});
  };
  render() {
    return (
      <View>
        <Text style={styles.header}>Header</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={this.data1}>
            <Text style={{textAlign: 'center', color: 'white'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.data2}>
            <Text style={{textAlign: 'center', color: 'white'}}>2</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{this.state.title} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    color: 'purple',
    margin: 20,
  },
  btn: {
    padding: 5,
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'purple',
    color: 'white',
  },
  text: {
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
});