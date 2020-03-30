import React, { useState, useEffect} from 'react';

import { Camera } from 'expo-camera';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';

// #fbbc2a jaune sielbleu
// #0c77bd bleu sielbleu
// style={styles.icon}
/*<Image
source={require('../Images/training.png')}
style={styles.icon}/> 
*/

function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Accueil" component={AccueilScreen} />
      <Stack.Screen name="Entreprise" component={EntrepriseScreen} />
        <Stack.Screen name="Métier" component={MétierScreen} />
        <Stack.Screen name="Taches" component={TachesScreen} />
        <Stack.Screen name="Sollicitations" component={SollicitationsScreen} />
        <Stack.Screen name="NeuroMusculaire" component={NeuroMusculaireScreen} />
        <Stack.Screen name="TeteEtCou" component={TeteEtCouScreen} />
        <Stack.Screen name="Bras" component={BrasScreen} />
        <Stack.Screen name="Tronc" component={TroncScreen} />
        <Stack.Screen name="Jambes" component={JambesScreen} />

        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Fin" component={FinScreen} />
        <Stack.Screen name="DiagnosticSuccess" component={DiagnosticSuccessScreen} />
        <Stack.Screen name="RoutineSuccess" component={RoutineSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function AccueilScreen({ navigation }) {
  return (

    <View style={styles.container}>
    <View style={styles.logo}>
      
      <Image
      
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />
     
     

    
      <Button buttonStyle={styles.boutonNew}
        title="Nouveau Diagnostic"
        type="solid"
        onPress={() => navigation.navigate('Entreprise')}
      />
      
      </View>
    </View>

  );
}

function EntrepriseScreen({ navigation }) {
  return (

  <View style={styles.container}>
    <View style={styles.logo}>
      
      <Image
      
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />
     
     </View>
    <View style={{alignItems:'center'}}>
    <Text >Date</Text>
     <TextInput
        placeholder='12/03/2020'
      />
     <Text >Nom de l'entreprise :</Text>
     <TextInput
        placeholder='Safran, Alstom...'
      />
      </View>
    <View style={styles.bouton}>
      <Button buttonStyle={styles.boutons}
        title="Suivant"
        type="solid"
        onPress={() => navigation.navigate('Métier')}
      />
      
    </View>
  </View>

  );
}

function MétierScreen({ navigation }) {
  return (

  <View style={styles.container}>
    <View style={styles.logo}>
      
      <Image
      
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />
     
     </View>
    <View style={{alignItems:'center'}}>
     <Text >Nom du métier :</Text>
     <TextInput
        placeholder='Electricien, Mécanicien...'
      />
      </View>
      <View style={{alignItems:'center'}}>
      <Text >Description de l'activité :</Text>
      <TextInput
        placeholder='Réparations sur structures électriques...'
      />
    </View>
    <View style={styles.bouton}>
      <Button buttonStyle={styles.boutons}
        title="Suivant"
        type="solid"
        onPress={() => navigation.navigate('Taches')}
      />
      
    </View>
  </View>

  );
}
/*
function ActivitéScreen({ navigation }) {
  return (

  <View style={styles.container}>
    <View style={styles.logo}>
      <Image
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />
     </View>
     <View style={{alignItems:'center'}}>
      <Text >Description de l'activité :</Text>
      <TextInput
        placeholder='Réparations sur structures électriques...'
      />
    </View>
    <View style={styles.bouton}>
      <Button buttonStyle={styles.boutons}
        title="Suivant"
        type="solid"
        onPress={() => navigation.navigate('Photo')}
      />  
    </View>
  </View>
  );
}*/

function TachesScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={styles.logo}>
      <Image
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />
     </View>
     <View style={{alignItems:'center'}}>
      <Text >Tache 1</Text>
      
      <Image
      source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
      resizeMode = 'cover'
      style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}
     />

    </View>
    
    <View style={styles.bouton}>
    <Button buttonStyle={styles.boutons}
        title="Prendre une photo"
        type="solid"
        onPress={() => navigation.navigate('Camera')}
      />  
      <Button buttonStyle={styles.boutons}
        title="Suivant"
        type="solid"
        onPress={() => navigation.navigate('Sollicitations')}
      />   
      <Button buttonStyle={styles.boutons}
        title="=> Générer les documents"
        type="solid"
        onPress={() => navigation.navigate('Fin')}
      />  
    </View>
  </View>
  );
}

function CameraScreen({ navigation }) {

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

function SollicitationsScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations</Text>
      <Button
      
        title="Neuro-musculaire"
        onPress={() => navigation.navigate('NeuroMusculaire')}
      />
      <Button
      
        title="Tete et cou"
        onPress={() => navigation.navigate('TeteEtCou')}
      />
      <Button
        title="Bras"
        onPress={() => navigation.navigate('Bras')}
      />
      <Button
        title="Tronc"
        onPress={() => navigation.navigate('Tronc')}
      />
      <Button
        
        title="Jambes"
        onPress={() => navigation.navigate('Jambes')}
      />
      <Button
        title="Précédent"
        onPress={() => navigation.navigate('Taches')}
      />
      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
    </View>
  );
}

function NeuroMusculaireScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations de la tête et du cou</Text>

      <Button
        title="Mouvement gauche/droite de la tête (NON)"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Flexion, rotation du cou "
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
      
      
    </View>
  );
}

function TeteEtCouScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations de la tête et du cou</Text>

      <Button
        title="Mouvement gauche/droite de la tête (NON)"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Flexion, rotation du cou "
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
      
    </View>
  );
}
function TroncScreen({ navigation }) {
  
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations du tronc</Text>
      
      <CheckBox
      title='Posture de travail statique'
      value={true}
      />

      <Button
        title="Dos plat/dos rond/dos creux"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Dos : flexion latérale, de torsion et de flexion du dos au delà de 60°"
        onPress={() => navigation.navigate('Sollicitations')}
      />

      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
      
      
    </View>

  );
}
function BrasScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations des bras</Text>
      <Button
        title="Ouvrir/fermer les mains"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Rotation de poignets"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Ciseaux avec les bras"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Balencement des bras"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      
      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
      
      
    </View>
  );
}
function JambesScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Sollicitations des jambes</Text>
      
      <Button
        title="Rotation de genoux"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="Echauffement chevilles"
        onPress={() => navigation.navigate('Sollicitations')}
      />
      <Button
        title="OK"
        onPress={() => navigation.navigate('Fin')}
      />
      
      
    </View>
  );
}

function FinScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Button
        title="Ajouter un métier"
        onPress={() => navigation.navigate('Métier')}
      />
      <Button
        title="Ajouter une tache"
        onPress={() => navigation.navigate('Tache')}
      />
      <Button
        title="Générer le diagnostic"
        onPress={() => navigation.navigate('DiagnosticSuccess')}
      />
      <Button
        title="Génerer la routine d'échauffement"
        onPress={() => navigation.navigate('RoutineSuccess')}
      />
    </View>
  );
}

function DiagnosticSuccessScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Diagnostic généré</Text>
    </View>
  );
}
function RoutineSuccessScreen({ navigation }) {
  return (
    <View style={styles.centrage}>
      <Image
      source={require('./Ressources/SielBleuLogo.gif')}
      />
      <Text>Routine d'échauffement générée</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default App;

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