import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';
 
export default class ScreenExternal extends Component {
  render() {
    return (
      <View style={{margin:20}}>
        <Text style={{margin:20}}>Profile</Text>
       
        <Button
          title="For More Details.."
          onPress={() => this.props.navigation.navigate('ScreenExternal2')}
        />
      </View>
    );
  }
}