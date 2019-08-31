import React,{Component} from 'react';
import {View,Text, Button} from "react-native";
import {createStackNavigator,createAppContainer} from 'react-navigation';
class Home extends Component{
    static navigationOptions=({navigation})=>{
        return{title:navigation.getParam('Title','Home')}
    }
    render(){
        const {navigate}=this.props.navigation;
        return(<View>
            <Text>Home Screen</Text>
            <Button title="go to profile" onPress={()=>navigate('Profile')} />
        </View>)
    }
    
}
class Profile extends Component{
    static navigationOptions=({navigation})=>{
        return{title:navigation.getParam('Title','Profile')}
    }
    render(){
        const {navigate}=this.props.navigation;
        return(<View>
            <Text>Home Screen</Text>
            <Button title="go to Home" onPress={()=>navigate('Home')} />
        </View>)
    }
    
}
const StackNavigator= createStackNavigator({
    Home:Home,
    Profile:Profile
},
{
initialRouteName:'Home'
})
export default createAppContainer(StackNavigator)