import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

const MyComponent = ({ navigation }) => (
  
  <Button 
  buttonStyle={{backgroundColor: '#0c77bd'}}
  title="Créer un nouveau document"
  type="solid"
  onPress={() => navigation.navigate('CompanyScreen')}
  
   />
);

export default MyComponent;