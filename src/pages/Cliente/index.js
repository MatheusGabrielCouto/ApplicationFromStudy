import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { AppLoading } from 'expo'
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

export default function Cliente({navigation}) {

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Image style={{width: 400, height: 300, marginBottom: 50}} source={require('../../assets/clientIcon.png')} />
      <Text style={styles.title}>Cliente</Text>
      <View>
      <Text style={{color: "#fff", fontWeight: 'bold', left: 10 }}>Email</Text>
        <View style={{flexDirection: 'row', width: 300}}>
          <TextInput style={styles.email} />
        </View>
      
      <Text style={{color: "#fff", fontWeight: 'bold', left: 10  }}>Senha</Text>
        <View style={{flexDirection: 'row', backgroundColor: "#fff", width: 300, borderRadius: 15}}>
          <TextInput secureTextEntry={true} style={styles.password} />
          <Icon name="eye" style={{top: 5}} size={30} />
        </View>
      </View>
      <TouchableOpacity style={{top: 10}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Registrar-se</Text>
      </TouchableOpacity>
      

      <View style={{top: 40}}>
        <TouchableOpacity style={styles.btnLog} onPress={() => navigation.navigate('Services')}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3E82FC"
  },
  title: {
    fontSize: 32,
    marginBottom: 20, 
    fontFamily: 'Ubuntu_400Regular', 
    color: "#26F7FD",
    fontWeight: "bold",
    textShadowColor: '#546e7a',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 1
  },
  btnLog: {
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
  btnReg: {
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
  },
  email: {
    height: 40, 
    backgroundColor: '#FFF',
    paddingHorizontal: 10,  
    marginBottom: 20,
    flex: 1,
    borderRadius: 15
  },
  password: {
    height: 40, 
    paddingHorizontal: 10,
    flex: 1
  }
})