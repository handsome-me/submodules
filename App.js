//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export  function App() {
  return (
    <View style={styles.container}>
      <Text>This screen is inside subm!</Text>
     
    </View>
  );
}

export const ShareScreen=()=>{
 return (
    <View style={styles.container}>
      <Text style={styles.container}>This alignItems submodules ......!</Text>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:'green'
  },
 
});
