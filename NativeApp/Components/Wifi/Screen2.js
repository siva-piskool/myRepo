import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Picker
} from "react-native";

export default class Screen2 extends Component {
  state = {
    ssid: null,
    passphrase: null,
    mode: null
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  submit = () => {
    fetch("http://10.0.2.2:3000/wifi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wifi-Settings</Text>
        <View style={styles.btn}>
          <View>
            <Button title="Save" onPress={this.submit} />
          </View>
          <View>
            <Button title="Cancel" onPress={() => navigate("Screen1")} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>SSID:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="SSID"
            placeholderTextColor="#9a73ef"
            onChangeText={val => this.onChangeText("ssid", val)}
          />
          <Text style={styles.label}>PassPhrase:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            placeholder="PassPhrase"
            placeholderTextColor="#9a73ef"
            onChangeText={val => this.onChangeText("passphrase", val)}
          />
          <Text style={styles.label}>Wifi-Mode:</Text>
          <Picker
            selectedValue={this.state.mode}
            onValueChange={val => this.onChangeText("mode", val)}
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
    flex: 1,
    paddingTop: 20
  },
  title: {
    color: "blue",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    margin: 8,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  label: {
    margin: 8,
    fontSize: 20
  },
  btn: {
   flexDirection: "row",
    justifyContent: "space-around",
    margin:20
  }
});
