import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

import { Image } from 'react-native-elements';
import Button from 'apsl-react-native-button'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SollicitationsBras extends React.Component {
  constructor(){
    super()
    this.state ={
      userSollicitation1: 'mouvement blablabla',
    }
}
_uploadSollicitation = () =>{
  fetch('http:/192.168.1.33/SielBleu_backend/add_sollicitation1.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sollicitation: this.state.userSollicitation1,
  })
  }).then((response) => response.text())
        .then((responseJson) => {
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
        
}

_navToEnd = () =>{   
  this.props.navigation.navigate('EndScreen');
}
    render() {
      return(
    <View style={styles.container}>
      <View style={styles.top_container}>
          <View style={{width:'20%',padding:5}}>
            <Button 
            style={{backgroundColor: '#0c77bd'}}
            textStyle={{fontSize: 13,color:'white'}}
            onPress={() => navigation.navigate('Entreprise')}>Entreprise</Button>
          </View>
          <View style={{width:'19%',padding:5}}>
            <Button 
            style={{backgroundColor: '#0c77bd'}}
            textStyle={{fontSize: 19,color:'white'}}
            onPress={() => navigation.navigate('Métier')}>Métier</Button>
          </View>
          <View style={{width:'19%',padding:5}}>
            <Button 
            style={{backgroundColor: '#0c77bd'}}
            textStyle={{fontSize: 17,color:'white'}}
            onPress={() => navigation.navigate('Taches')}>Taches</Button>
          </View>
          <View style={{width:'20%',padding:5}}>
            <Button 
            style={{backgroundColor: '#34a4ed'}}
            textStyle={{fontSize: 10,color:'white'}}
            onPress={() => navigation.navigate('Sollicitations')}>Sollicitations</Button>
          </View>
          <View style={{width:'21%',padding:5}}>
            <Button 
            style={{backgroundColor: '#0c77bd'}}
            textStyle={{fontSize: 11,color:'white'}}
            onPress={() => navigation.navigate('Fin')}>Générations documents</Button>
          </View>
      </View>
      <View style={styles.centrage}>
        
        <Image
        source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
        resizeMode = 'cover'
        style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}/>
        <Text>Sollicitations</Text>
        
        <TouchableOpacity 
        onPress={this._uploadSollicitation}
        style={{width:200, height:100, backgroundColor:'lightgrey'}}>
          <Text style={{fontSize: 10, color:'blue'}}>Mouvements répétitifs de flexion/extension du coude</Text>
        </TouchableOpacity>

        <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={() => navigation.navigate('Taches')}>Précedent</Button>
        <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={this._navToEnd}
        >OK</Button>
      </View>
    </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    },
  top_container: {
    height:'10%',
    flexDirection:'row'
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
})

