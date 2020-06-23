import React, { useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image, CheckBox } from 'react-native-elements';
import Button from 'apsl-react-native-button'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class TasksScreen extends React.Component {
  constructor(){
    super()
    this.state ={
        userProfilePic:'require(\'../Images/coolguy.png\')',
        userPseudo:'Kevin',
        userLevel:'42',
        userSpeciality: 'Static',
        userDomain:'Street-Workout',
        showSkill:false,
        showProfile:false,
        hasCameraPermission: null,
        image: null,
    }
}

async componentDidMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  this.setState({ hasCameraPermission: status === "granted" });
 }

_getPhotoLibrary = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
   allowsEditing: true,
   aspect: [4, 3]
  });
  if (!result.cancelled) {
   this.setState({ image: result.uri });
  }
 }

    render() {
      const { image, hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
   return <View />
  }
  else if (hasCameraPermission === false) {
   return <Text>Access to camera has been denied.</Text>;
  }
  else {
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

        
          <View style={styles.activeImageContainer}>
      {image ? (
       <Image source={{ uri: image }} style={{ flex: 1 }} />
      ) : (
       <View/>
      )}
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Button 
       onPress={this._getPhotoLibrary.bind(this)} 
       
     >Photo Picker Screen</Button>
    </View>
        </View>
        <View style={styles.bouton}>
        <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={() => navigation.navigate('Camera')}>Prendre une photo</Button> 
          <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={() => navigation.navigate('Sollicitations')}>Sollicitations</Button> 
          <Button 
        style={{backgroundColor: '#0c77bd'}}
        textStyle={{fontSize: 20,color:'white'}}
        onPress={() => navigation.navigate('Fin')}>Générer les documents</Button>  
        </View>
      </View>
    );
}
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
    marginTop: windowHeight*0.1,
    flex:1,
  },
  boutonDouble: {
    flex:1,
    flexDirection: 'row'
  },
  logo: {
    flex: 1,
    alignItems: 'center', 
    marginTop: windowHeight*0.007,
  },
  activeImageContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#eee",
    borderBottomWidth: 0.5,
    borderColor: "#fff"
   },
 
})

export default TasksScreen