import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
      <Image style={styles.image} source={require('../../assets/workerIcon.png')} />
      <Text style={styles.title}>RondoWorkers</Text>
      <View style={styles.containerBnt}>
        <TouchableOpacity style={styles.btnCli} onPress={() => navigation.navigate('Cliente')} >
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWork} onPress={() => navigation.navigate('Worker')}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Profissional</Text>
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
    backgroundColor: "#3E82FC"
  },
  image: {
    width: 400,
    height: 250,
    top: -50,
  },
  title: {
    fontSize:40,
    color:"#26F7FD",
    fontFamily: "Ubuntu_700Bold",
    fontWeight: "bold",
    textShadowColor: '#546e7a',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 1
  },
  containerBnt: {
    top: 115
  },
  btnCli: {
    backgroundColor: "#FE2C54",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  btnWork: {
    marginTop: 20,
    backgroundColor: "#FE2C54",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  }
});

