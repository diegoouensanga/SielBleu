import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';

import { Image, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AuthSession } from 'expo';
import Button from 'apsl-react-native-button'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class JobScreen extends React.Component {
  constructor(){
    super()
    this.state ={
        userPseudoBackend:{},
        listeEntreprises:{},
        userProfilePic:'require(\'../Images/coolguy.png\')',
        userPseudo:'Kevin',
        userLevel:'42',
        userSpeciality: 'Static',
        userDomain:'Street-Workout',
        showSkill:false,
        showProfile:false
    }
}
componentDidMount(){
    //une fois que le component est monté, on executé ça
   fetch('http:/192.168.1.33/SielBleu_backend/showEntreprises.php')
   .then((response) => {
       return response.json()
   })
   .then((result) => {
       setTimeout(() => {
           this.setState({userPseudoBackend: result})
           const listeEntreprises = result
       });
       
   })
 }
    render() {
      return(
    <View style={styles.container}>
        <Text style={{marginTop:200}}>HOLA MAGGLE</Text>
        <Image
          source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
          resizeMode = 'cover'
          style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }}/>
          <Text>
                {(this.state.userPseudoBackend.entreprises) ? this.state.userPseudoBackend.entreprises : 'Chargement'}
              </Text>
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
  },
   
  TextInputStyleClass: {
   
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
  
  title:{
  
    fontSize: 22, 
    color: "#009688", 
    textAlign: 'center', 
    marginBottom: 15
  }
})

export default JobScreen