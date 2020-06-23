import React, { Component } from "react";

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Button from 'apsl-react-native-button'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class PhotoPickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
   return (
     
    <View style={{ flex: 1 }}>
      <View style={{flex:1}}>
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
      </View>
     <View style={styles.activeImageContainer}>
      {image ? (
       <Image source={{ uri: image }} style={{ flex: 1 }} />
      ) : (
       <View />
      )}
    </View>
    <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
     <Button 
       onPress={this._getPhotoLibrary.bind(this)} 
       style={{backgroundColor: '#0c77bd'}}
       textStyle={{fontSize: 20,color:'white'}}
       >Select image from gallery</Button>
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
 activeImageContainer: {
  flex: 5,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height / 2,
  backgroundColor: "#eee",
  borderBottomWidth: 0.5,
  borderColor: "#fff"
 },
 top_container: {
  height:'10%',
  flexDirection:'row'
},
});