import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import image from '../../assets/icon.png';
import { AppLoading } from 'expo'
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'

export default function Home({navigation}) {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Ubuntu_400Regular, Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>RondoWorkers</Text>

      <View style={styles.containerBnt}>
        <TouchableOpacity style={styles.btnCli} onPress={() => navigation.navigate('Cliente')} >
          <Text>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWork} >
          <Text>Profissional</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#64ffda"
  },
  image: {
    width: 350,
  },
  title: {
    fontSize:32,
    color:"#453493",
    fontFamily: "Ubuntu_700Bold",
    fontWeight: "bold"
  },
  containerBnt: {
    top: 150
  },
  btnCli: {
    backgroundColor: "#ffeb3b",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderColor: "#5AE6C5",
    borderWidth: 3,
    borderRadius: 15
  },
  btnWork: {
    marginTop: 20,
    backgroundColor: "#ffeb3b",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderColor: "#5AE6C5",
    borderWidth: 3,
    borderRadius: 15
  }
});
