import React, { Component } from "react";

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, StyleSheet, Dimensions, Image, Modal } from "react-native";
import Button from 'apsl-react-native-button'
import RNFetchBlob from 'rn-fetch-blob'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class PhotoPickerScreen extends Component {
  state = {
    image: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      image: null,
      imageSource: null,
      data: null,
    }
  }
  _takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  _getPhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      this.setState({ 
        image: result.uri,
        data: result.data,
       });
    }
  }
  _uploadPhoto() {
    RNFetchBlob.fetch('POST', 'http:/192.168.1.33/SielBleu_backend/upload_photo.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
      // element with property `filename` will be transformed into `file` in form data

      { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },

    ]).then((resp) => {
      // ...
    }).catch((err) => {
      // ...
    })
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

          {/* GUIDE LINE */}

          <View style={{ flex: 1 }}>
            <View style={styles.top_container}>
              <View style={{ width: '20%', padding: 5 }}>
                <Button
                  style={{ backgroundColor: '#0c77bd' }}
                  textStyle={{ fontSize: 13, color: 'white' }}
                  onPress={() => navigation.navigate('Entreprise')}>Entreprise</Button>
              </View>
              <View style={{ width: '19%', padding: 5 }}>
                <Button
                  style={{ backgroundColor: '#0c77bd' }}
                  textStyle={{ fontSize: 19, color: 'white' }}
                  onPress={() => navigation.navigate('Métier')}>Métier</Button>
              </View>
              <View style={{ width: '19%', padding: 5 }}>
                <Button
                  style={{ backgroundColor: '#0c77bd' }}
                  textStyle={{ fontSize: 17, color: 'white' }}
                  onPress={() => navigation.navigate('Taches')}>Taches</Button>
              </View>
              <View style={{ width: '20%', padding: 5 }}>
                <Button
                  style={{ backgroundColor: '#0c77bd' }}
                  textStyle={{ fontSize: 10, color: 'white' }}
                  onPress={() => navigation.navigate('Sollicitations')}>Sollicitations</Button>
              </View>
              <View style={{ width: '21%', padding: 5 }}>
                <Button
                  style={{ backgroundColor: '#0c77bd' }}
                  textStyle={{ fontSize: 11, color: 'white' }}
                  onPress={() => navigation.navigate('Fin')}>Générations documents</Button>
              </View>
            </View>
          </View>
          {/* END GUIDE LINE */}

          {/* PHOTO */}
          <View style={styles.activeImageContainer}>

            {image ? (
              <Image source={{ uri: image }} style={{ flex: 1, resizeMode: 'contain' }} />
            ) : (
                <View />
              )}
          </View>
          {/* END PHOTO */}

          {/* BOUTONS */}
          <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
            <Button
              onPress={this._getPhotoFromLibrary.bind(this)}
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 20, color: 'white' }}
            >Select image from gallery</Button>
            <Button
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 20, color: 'white' }}
              onPress={this._takePicture}>Prendre une photo</Button>
            <Button
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 20, color: 'white' }}
              onPress={this._uploadPhoto}
            >Upload</Button>
            <Button
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 20, color: 'white' }}
              onPress={() => navigation.navigate('Sollicitations')}>Sollicitations</Button>
            <Button
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 20, color: 'white' }}
              onPress={() => navigation.navigate('Fin')}>Générer les documents</Button>
          </View>
          {/* END BOUTONS */}
        </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  activeImageContainer: {
    marginLeft: 80,
    flex: 5,
    width: 200,
    height: 300,
    backgroundColor: "#eee",
    borderBottomWidth: 0.5,
    borderColor: "#fff"
  },
  top_container: {
    height: '10%',
    flexDirection: 'row'
  },
});