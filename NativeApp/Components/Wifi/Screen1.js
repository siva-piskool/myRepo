import React, { Component } from "react";
import {
  Picker,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from "react-native";

class Screen1 extends Component {
  
  state = {
    ssid: null,
    passphrase: null,
    mode: null
  };

  componentDidMount() {
    fetch("http://10.0.2.2:3000/wifi")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          ssid: responseJson.ssid,
          passphrase: responseJson.passphrase,
          mode: responseJson.mode
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Wifi-Settings</Text>
       <View style={styles.btn} >
         <View><Button title="Edit" onPress={() => navigate('Screen2')} /></View>
        </View>
       <View><Text style={styles.text}>SSID:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="SSID"
            placeholderTextColor="#9a73ef"
           editable={false}
           value={this.state.ssid}
          />
        <Text style={styles.text}>Pass Phrase : </Text>
        <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="SSID"
            placeholderTextColor="#9a73ef"
           editable={false}
           value={this.state.passphrase}
          />
        <Text style={styles.text}>Mode:</Text>
        <Picker
          selectedValue={this.state.mode}
          style={{ width: 120 }}
          enabled={false}
        >
          <Picker.Item label="AP" value="mode" /> 
          <Picker.Item label="State" value="mode" />
        </Picker>
        </View>
         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20,
  },
  input:{
    fontWeight:"bold",
    margin: 8,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    fontSize:20
  },        
  title: {
    color: "blue",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    fontSize: 24,
    padding: 10
  },
btn:{
  flexDirection:"row",
  justifyContent:"flex-end",
  margin:10
}
});
export default Screen1;
