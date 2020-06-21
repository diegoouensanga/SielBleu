import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

const EntrepriseToMetier = ({ navigation }) => (
  
  <Button 
  buttonStyle={{backgroundColor: '#0c77bd'}}
  title="Suivant"
  type="solid"
  onPress={() => this._createCompteRendu()}
  onPress={() => navigation.navigate('JobScreen')}
  //onPress={() => { navigation.navigate('JobScreen'); this._createCompteRendu(); }}
   />
   
);

export default EntrepriseToMetier;