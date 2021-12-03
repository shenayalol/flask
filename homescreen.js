import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress= {()=>this.props.navigation.navigate('planetslist')}>
        
      <Text>exo planets</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {()=>this.props.navigation.navigate('goldilocks')}>
      <Text>human inhabitable planets</Text>
      </TouchableOpacity>

      
      </View>
    );
  }
}

