import React, {Component} from 'react';
import {View,Text} from "react-native";
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
class Home extends Component{
    render(){
        return(<View>
            <Text>Home Screen</Text>
        </View>)
    }
}
class About extends Component{
    render(){
        return(<View>
            <Text>About</Text>
        </View>)
    }
}
const TabNavigator=createBottomTabNavigator({
    Home:Home,
    About:About
},
{ tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#6b52ae',
    labelStyle:{
        fontSize:24
    },
    borderRadius:50
}
})

export default createAppContainer(TabNavigator);

