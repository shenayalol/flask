import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
}



componentDidMount() {
    this.getplanetdata()
    
}
getplanetdata = () => {
    axios
        .get("http://127.0.0.1:5000/goldilockdata")  
        .then(response => {
          console.log(response.data)   
            this.setState({ data: response.data.data})
        })
        
        .catch(error => {
            Alert.alert(error.message)
        })
}
  renderItem = ({ item }) => (
<Text>item</Text>  
);
  render() {
    return (
      <View>
      <Text>Planet List</Text>
      <View>
          {this.state.data.map(item => {
            return (
              <View>
           <Text>{item[1]}</Text>
           <Text>{item[2]}</Text>
           <Text>{item[3]}</Text>
              </View>
              
            );
          })}
        </View>
      </View>
      
    );
  }
}

