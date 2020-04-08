import React, { useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, CheckBox,Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export  function ProcessLine ({navigation})  {
    return (
      <View style={styles.top_container}>
          <View style={{width:'20%',padding:5}}>
        <Button 
        title='Entreprise'
        onPress={() => navigation.navigate('Entreprise')} />
        </View>
        <View style={{width:'19%',padding:5}}>
        <Button 
        title='Métier'
        onPress={() => navigation.navigate('Métier')} />
        </View>
        <View style={{width:'19%',padding:5}}>
        <Button 
        title='Tâches'
        onPress={() => navigation.navigate('Taches')} />

        </View>
        <View style={{width:'20%',padding:5}}>
        <Button 
        title='Sollicitations'
        onPress={() => navigation.navigate('Sollicitations')} />

        </View>
        <View style={{width:'21%',padding:5}}>
        <Button 
        title='Génération documents'
        onPress={() => navigation.navigate('Fin')} />

        </View>
        

            
        
      </View>
  
    );
}

const styles = StyleSheet.create({
  top_container: {
    height:'10%',
    flexDirection:'row'
    }
});