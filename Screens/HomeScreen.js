import React from 'react';

import { View, StyleSheet, Dimensions,ScrollView,Text } from 'react-native';

import { Button, Image, CheckBox } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'lightblue',flex: 1, alignItems: 'center'}}>
            <Image
            source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
            resizeMode = 'cover'
            style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }} />
            <Button 
            buttonStyle={{backgroundColor: '#0c77bd',marginTop: windowHeight*0.03}}
            title="Créer un nouveau document"
            type="solid"
            onPress={() => navigation.navigate('Entreprise')}
             />
        </View>

        <View style={{backgroundColor:'lightgrey',flex:3,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,marginBottom:windowHeight*0.01}}>Anciens documents : </Text>
        <ScrollView style={{backgroundColor:'grey',width:windowWidth*0.8,maxHeight:windowHeight*0.4}}>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        <Text>bLfijfeijez</Text>
        </ScrollView>
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
  
  boutons: {
    backgroundColor: '#0c77bd',
  },
  
});