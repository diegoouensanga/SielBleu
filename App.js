import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import CompanyScreen from './Screens/CompanyScreen'
import JobScreen from './Screens/JobScreen'
import TasksScreen from './Screens/TasksScreen'
import SollicitationsScreen from './Screens/SollicitationsScreen'
import SollicitationsBras from './Screens/SollicitationsBras'
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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CompanyScreen" component={CompanyScreen} />
          <Stack.Screen name="JobScreen" component={JobScreen} />
          <Stack.Screen name="TasksScreen" component={TasksScreen} />
          <Stack.Screen name="SollicitationsScreen" component={SollicitationsScreen} />
          <Stack.Screen name="SollicitationsBras" component={SollicitationsBras} />
          <Stack.Screen name="EndScreen" component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});