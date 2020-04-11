import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

import { Image, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';
import Button from 'apsl-react-native-button'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function JobScreen({ navigation }) {
    return (
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
            style={{backgroundColor: '#0c77bd'}}
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
        <View style={styles.logo}>
            <Image
            source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
            resizeMode = 'cover'
            style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}/>
        </View>
        <View style={{alignItems:'center'}}>
            <Text >Nom du métier :</Text>
            <TextInput
            placeholder='Electricien, Mécanicien...'/>
        </View>
        <View style={{alignItems:'center'}}>
            <Text >Description de l'activité :</Text>
            <TextInput
            placeholder='Réparations sur structures électriques...'/>
        </View>
        <View style={styles.bouton}>
        <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={() => navigation.navigate('Taches')}>Suivant</Button>
        </View>
    </View>
    );
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
});