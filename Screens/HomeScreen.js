import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';

import { Button, Image, CheckBox } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
            <Image
            source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
            resizeMode = 'cover'
            style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }} />
            <Button 
            buttonStyle={styles.boutonNew}
            title="Nouveau Diagnostic"
            type="solid"
            onPress={() => navigation.navigate('Entreprise')} />
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