import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function Services({navigation}) {
return (
  <View style={styles.container}>
    <Text style={styles.title}>Serviços</Text>
    <View style={{marginTop: 30}}>
      {/* Line 1  */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Home')}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/works/paint.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/works/eletricist.png')} />
        <Text style={styles.optionsTitle}>Eletricista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/workerIcon.png')} />
        <Text style={styles.optionsTitle}>Contrução</Text>
        </TouchableOpacity>
      </View>
      {/* Line 2 */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
      </View>
      {/* Line 3 */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
      </View>
      {/* Line 4 */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
        <Image style={{width: 80, height: 80}} source={require('../../assets/clientIcon.png')} />
        <Text style={styles.optionsTitle}>Pintura</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E82FC"
  },
  title: {
    textAlign: 'center',
    paddingTop: 50,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 23,
    
  },
  options: {
    padding: 15,
    marginHorizontal: 5,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#FFF',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  optionsTitle: {
    color: '#fff'
  }
});
