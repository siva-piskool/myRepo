import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import ScreenExternal from './pages/ScreenExternal';
import ScreenExternal2 from './pages/ScreenExternal2';
import ScreenInternal from './pages/ScreenInternal';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
        <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Motor_State',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  
});
 
const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Water_Level',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  ScreenInternal: {
    screen: ScreenInternal,
   navigationOptions: ({ navigation }) => ({
     headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

     headerStyle: {
        backgroundColor: '#FF9800',
     },
      headerTintColor: '#fff',
   }),
 },
});
 
const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Wifi-Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Drawer = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Motor-State',
    },
  },
 
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Water-Level',
    },
  },
 
  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Wifi-Settings',
    },
  },
 });
const DrawerNavigatorExample = createStackNavigator({
  Drawer: { screen: Drawer, navigationOptions: { header: null,  } },
 
  ScreenExternal: {
    screen: ScreenExternal,
    navigationOptions: { title: 'Screen External' },
  },
  ScreenExternal2: {
    screen: ScreenExternal2,
    navigationOptions: { title: 'Screen External2' },
  },
});

export default createAppContainer(DrawerNavigatorExample);
