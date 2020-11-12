import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
      <Text style={{fontSize: 32, marginBottom: 20, fontFamily: 'Ubuntu_400Regular'}}>RondoWorkers</Text>
      <Text>Email</Text>
      <View style={{flexDirection: 'row', width: 250}}>
        <TextInput style={styles.email} />
      </View>
      
      <Text>Senha</Text>
      <View style={{flexDirection: 'row', backgroundColor: "#fff", width: 250}}>
        <TextInput secureTextEntry={true} style={styles.password} />
        <Icon name="eye" style={{top: 5}} size={30} />
      </View>
      

      <View style={{marginTop: 20}}>
        <TouchableOpacity style={styles.btnLog}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnReg}>
          <Text>Registrar-se</Text>
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
    backgroundColor: "#64ffda"
  },
  btnLog: {
    backgroundColor: "#ffeb3b",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderColor: "#5AE6C5",
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 20
  },
  btnReg: {
    backgroundColor: "#ffeb3b",
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: "center",
    borderColor: "#5AE6C5",
    borderWidth: 3,
    borderRadius: 15
  },
  email: {
    height: 40, 
    backgroundColor: '#FFF',
    paddingHorizontal: 10,  
    marginBottom: 20,
    flex: 1
  },
  password: {
    height: 40, 
    paddingHorizontal: 10,
    flex: 1
  }
})