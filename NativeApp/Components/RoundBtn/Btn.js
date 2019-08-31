import React,{Component} from 'react';
import {View,Text, Button,StyleSheet,TouchableOpacity} from 'react-native';
export default class Btn extends Component{
    render(){
        return(<View style={styles.container}>
            {/* <View style={styles.btn} >
                <Button title="btn1" />
            </View> */}
            <TouchableOpacity style={styles.btn}>
                <Text style={{textAlign:"center"}}>1</Text>
            </TouchableOpacity>
            <View >
                <Button title="1" />
            </View>
        </View>)
    }
}  
const styles=StyleSheet.create(
  {
      container:{
          
          flexDirection:"row",
          justifyContent:"space-around",
          margin:20,
        
      },
      btn:{
          width:50,
          textAlign:"center",
          color:"white",
        borderRadius:50,
        borderWidth:2,
        backgroundColor:"blue",
        borderColor:"blue"
          }

    }
);