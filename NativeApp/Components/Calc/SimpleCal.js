import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
class SimpleCal extends Component{
    constructor(props){ 
    super(props);
    this.state={
        num1:0,
        num2:0,
        result:0,
        tag:"Result"
    }}
    add=()=>{
        this.setState({result:parseInt(this.state.num1) + parseInt(this.state.num2),tag:"Addition of two numbers is :"})
    }
    sub=()=>{
        this.setState({result:parseInt(this.state.num1) - parseInt(this.state.num2),tag:"Addition of two numbers is :"})
    }
    mul=()=>{
        this.setState({result:parseInt(this.state.num1) * parseInt(this.state.num2),tag:"Addition of two numbers is :"})
    }
    div=()=>{
        this.setState({result:parseInt(this.state.num1) / parseInt(this.state.num2),tag:"Addition of two numbers is :"})
    }
    render(){
        return(<View style={styles.container}>
            <Text style={styles.title}>Simple Calculator</Text>
            <View>
            <Text style={styles.label}>Enter the First Value:</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text)=>this.setState({num1:parseInt(text)})} />
            <Text style={styles.label}>Enter the Second Value:</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(text)=>this.setState({num2:parseInt(text)})}/>
            <Text style={styles.label}>{this.state.tag}:<Text style={styles.result}>{this.state.result}</Text> </Text>
           </View>
         <View style={styles.btn}>
            <Button title="+" onPress={this.add} />
            <Button title="-" onPress={this.sub} />
           </View>
           <View style={styles.btn}>
            <Button title="*" onPress={this.mul} />
            <Button title="/" onPress={this.div} /> 
           </View>
          
        </View>)
    }
}
export default SimpleCal;
const styles= StyleSheet.create({
input:{
    borderColor:'blue',
    borderWidth:2,
    margin:20,
    width:50
    },
    container:{
        flex:1,
        
    },
btn:{
    margin:20,
    width: 100,
    fontSize:32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
},
title:{
    fontSize:32,
    fontWeight:"bold",
    color:"blue",
    textAlign:"center"
},
label:{
    fontSize:20
},
result:{
    fontSize:24,
    fontWeight:"bold",
    color:"blue"
}
}) 