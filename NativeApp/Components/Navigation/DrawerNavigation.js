import React,{Component} from 'react';
import {createDrawerNavigator,createAppContainer} from "react-navigation";
import{View,Button,Text} from 'react-native';
class HomeScreen extends Component{
    render(){
        return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="open Drawer" onPress={this.props.navigation.openDrawer}/>
            <Text>Home</Text>
        </View>)
    }
}
class AboutScreen extends Component{
    render(){
        return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="open Drawer" onPress={this.props.navigation.openDrawer} />
            <Text>About</Text>
            </View>)
    }
}
const DrawerNavigator=createDrawerNavigator({
    Home:HomeScreen,
    About:AboutScreen
},
{
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    }})
    export default createAppContainer(DrawerNavigator);