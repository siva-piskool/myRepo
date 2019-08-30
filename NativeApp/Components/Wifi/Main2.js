import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import {createStackNavigator, createAppContainer} from 'react-navigation';


const MainNavigator =  createStackNavigator ({
    Screen1: { screen: Screen1},
    Screen2: { screen: Screen2},
  });
  const App3 = createAppContainer(MainNavigator);

export default App3;