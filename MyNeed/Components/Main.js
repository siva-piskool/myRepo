import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Home from './Home';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {title: 'Home'};
    }
 
  data1 = () => {
    this.setState({title: 'screen1'});
  };
  data2 = () => {
    this.setState({title: 'screen2'});
  };
renderComponent= param =>{
    switch(param){
        case"screen1":
        return<Screen1/>;
        break;
        case"screen2":
        return<Screen2/>;
        break;
        case "Home":
        return<Home/>;
        break;
    }

}
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
        <View>{this.renderComponent(this.state.title)}</View>
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