import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
class SimpleCal extends Component{
    constructor(props){ 
    super(props);
    this.state={
        num1:0,
        num2:0,
        add:0,
        sub:0,
        mul:0,
        div:0
    }}
    render(){
        return(<View>
            <Text style={styles.title}>Simple Calculator</Text>
            <View>
            <Text style={styles.label}>Enter the First Value:</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text)=>this.setState({num1:parseInt(text)})} />
            <Text style={styles.label}>Enter the Second Value:</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text)=>this.setState({num2:parseInt(text)})} />
            </View>
           <View style={styles.btn}>
            <Button title="add" onPress={()=>{this.setState({add:parseInt(this.state.num1) + parseInt(this.state.num2)})}} />
           </View>
           <Text>Result is :{this.state.add}</Text>
           <View style={styles.btn}>
            <Button title="Sub" onPress={()=>{this.setState({sub:parseInt(this.state.num1) - parseInt(this.state.num2)})}} />
           </View>
           <Text>Result is :{this.state.sub}</Text>
           <View style={styles.btn}>
            <Button title="mul" onPress={()=>{this.setState({mul:parseInt(this.state.num1) * parseInt(this.state.num2)})}} />
           </View>
           <Text>Result is :{this.state.mul}</Text>
           <View style={styles.btn}>
            <Button title="Div" onPress={()=>{this.setState({div:parseInt(this.state.num1) / parseInt(this.state.num2)})}} />
           </View>
           <Text>Result is :{this.state.div}</Text>
        </View>)
    }
}
export default SimpleCal;
const styles= StyleSheet.create({
input:{
    borderColor:'blue',
    borderWidth:2,
    margin:20
    },
btn:{
    width:100,
},
title:{
    fontSize:32,
    fontWeight:"bold",
    color:"blue",
    textAlign:"center"
},
label:{
    fontSize:20
}

}) 