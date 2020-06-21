import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Image, Button } from 'react-native-elements';

class EntrepriseToMetier2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          Read_entreprise: '',
          Read_date_creation: '',
        }
      }

  _createCompteRendu = () =>{
    fetch('http:/192.168.1.33/SielBleu_backend/create_compte_rendu.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entreprise: this.state.Read_entreprise,
        date_creation: this.state.Read_date_creation,
      })
    }).then((response) => response.text())
          .then((responseJson) => {
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
          }).catch((error) => {
            console.error(error);
          });
  }
  _createAndNavigate(){
      this._createCompteRendu();
      navigation.navigate('JobScreen');
  }

  render() {
    return   <Button 
    buttonStyle={{backgroundColor: '#0c77bd'}}
    title="Suivant"
    type="solid"
    onPress={this.props.methos}
    //onPress={() => this._createCompteRendu()}
    //onPress={() => navigation.navigate('JobScreen')}
    //onPress={() => { navigation.navigate('JobScreen'); this._createCompteRendu(); }}
     />
  }
}

export default EntrepriseToMetier2