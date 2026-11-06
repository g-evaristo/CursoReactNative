import React, {Component} from 'react';
import { View, Text } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{ flex: 1, backgroundColor: '#333333' }}>
        <View style={{ height:65, backgroundColor: '#000FFF'}}></View>
        <View style={{ flex: 1, backgroundColor: '#008000'}}></View>
        <View style={{ flex: 2, backgroundColor: '#FFCE1B'}}></View>
      </View>
    )
  }
}

export default App;