/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import  DrawerNavigator  from './Components/Navigation/DrawerNavigation';
AppRegistry.registerComponent(appName, () =>DrawerNavigator);
