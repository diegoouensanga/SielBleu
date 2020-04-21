import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import CompanyScreen from './Screens/CompanyScreen'
import JobScreen from './Screens/JobScreen'
import TasksScreen from './Screens/TasksScreen'
import CameraScreen from './Screens/CameraScreen'
import SollicitationsScreen from './Screens/SollicitationsScreen'
import EndScreen from './Screens/EndScreen'
import { createStackNavigator } from '@react-navigation/stack';

const ThemeYellowColor = '#fbbc2a';
const ThemeBlueColor = '#0c77bd';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Entreprise" component={CompanyScreen} />
        <Stack.Screen name="Métier" component={JobScreen} />
        <Stack.Screen name="Taches" component={TasksScreen} />
        <Stack.Screen name="Sollicitations" component={SollicitationsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Fin" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex:1,
   },
});