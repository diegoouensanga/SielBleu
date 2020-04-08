import React, { useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';
import {ProcessLine} from '../Components/ProcessLine'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function SollicitationsScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <ProcessLine/>
      <View style={styles.centrage}>
        
        <Image
        source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
        resizeMode = 'cover'
        style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}/>
        <Text>Sollicitations</Text>
        <Button
        title="Neuro-musculaire"
        onPress={() => alert('NeuroMusculaire')} />
        <Button
        title="Tete et cou"
        onPress={() => alert('TeteEtCou')}/>
        <Button
        title="Bras"
        onPress={() => alert('Bras')}/>
        <Button
        title="Tronc"
        onPress={() => alert('Tronc')}/>
        <Button
        title="Jambes"
        onPress={() => alert('Jambes')}/>
        <Button
        title="Précédent"
        onPress={() => navigation.navigate('Taches')} />
        <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}/>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    },
  centrage: {
    flex:1,
    alignItems: 'center', 
  },
  bouton: {
    marginTop: windowHeight*0.2,
    flex:1,
  },
  boutonDouble: {
    flex:1,
    flexDirection: 'row'
  },
  logo: {
    flex: 1,
    alignItems: 'center', 
    marginTop: windowHeight*0.07,
  },
  boutons: {
    backgroundColor: '#0c77bd',
  },
  boutonNew: {
    backgroundColor: '#0c77bd',
    marginTop: windowHeight*0.3,
  }
});