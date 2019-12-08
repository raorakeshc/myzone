import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class RestSample extends React.Component {
handlePress = async () => {
     const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
     const json= await response.json();
     console.log(json.length);
          for (var i = 0; i < 2; i++) 
          {
            console.log("In Loop of  "+json[0]["employee_name"]);
          }
     }
  render(){
  return(
   <View style={{paddingTop: 50, paddingLeft: 50 }}>
   <Text> Some other text </Text>
    <Text> Some other text </Text>
    <TouchableOpacity onPress={this.handlePress.bind(this)}>
     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
    </TouchableOpacity>
</View> 
  );
}
}

const AppNavigator = createStackNavigator({
  RestSample: {
    screen: RestSample,
  },
});

export default createAppContainer(AppNavigator);