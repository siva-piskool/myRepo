import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';

export default class Screen2 extends Component {
    render() {
      return (
        <View>
        <Text>Welcome to Screen2</Text>
        <View style={{marginTop:20}}>
         <Button
          title="click here for more screens"
          onPress={() => this.props.navigation.navigate('ScreenInternal')}
        />
         </View>
          
        </View>
      );
    }
  }
  