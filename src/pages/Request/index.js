import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function Request({navigation}) {
return (
<View style={styles.container}>
  <Text style={styles.title}>Pintura</Text>

  <View style={{marginLeft: 20, width: 300}}>
    <Text style={styles.text}>Casa/Comodo</Text>
  </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E82FC",
  },
  title: {
    marginVertical: 50,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 15,
    color: '#fff',
  }
})