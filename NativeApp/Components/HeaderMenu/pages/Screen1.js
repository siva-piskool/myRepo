import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
 
export default class Screen1 extends Component {
  render() {
    return (
  <View >
    <Text style={{ fontSize:32,color:"blue", fontWeight:"bold", textAlign:"center",marginBottom:20 }}> Screen 1 </Text>
  <Button
        title="Click here to view more screens"
        onPress={() => this.props.navigation.navigate('ScreenExternal')}
      />
      
  </View>
      
    );
  }
}
