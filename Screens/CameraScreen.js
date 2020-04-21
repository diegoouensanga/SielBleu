import React, { useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class CameraScreen extends React.Component {
  render(){

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    /*snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        this.setState({ previewUri: photo.uri })
      }
    };*/
  
   /*if (this.state.previewUri){
     <SafeAreaView style={{ flex: 1 }}>
       <Image source={{ uri: this.state.previewUri }} />
     </SafeAreaView>
   }*/
  
    return (
      
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }}  
        >
          
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
              <Button
          title="Take photo"
          //onPress={}
        />
            <TouchableOpacity //Pour switch en caméra frontale
              style={{
                flex: 0.3,
                alignSelf: 'flex-start',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: windowHeight*0.1, color: 'white', backgroundColor: 'black'}}> TOURNER </Text>
  
            </TouchableOpacity>
            
          </View>
        </Camera>
      </View>
    );
  }
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

export default Camera