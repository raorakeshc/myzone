import React  from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import AppNavigator from './components/AppNavigator';


export default function App() {
  return (
      <AppNavigator/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

