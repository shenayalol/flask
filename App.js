import * as React from 'react';
import { View } from 'react-native';
import {createAppContainer , createSwitchNavigator} from 'react-navigation';
import goldilocks from './screens/goldilocks';
import homeScreen from './screens/homescreen';
import planetList from './screens/planetslist';



export default class App extends React.Component {
  render() {
    return (
      <View>
        
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  homescreen : homeScreen,
  planetslist : planetList,
  goldilocks : goldilocks
})
const AppContainer = createAppContainer(AppNavigator);
