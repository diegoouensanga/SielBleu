import React from 'react';

import { View, StyleSheet, Dimensions,ScrollView,Text } from 'react-native';

import { Button, Image, CheckBox } from 'react-native-elements';

import MyComponent from '../Components/MyComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

fetch('http:/192.168.1.33/SielBleu_backend/showEntreprises.php')
    .then((response) => {
        return response.json()

    })
    .then((result) => {
        console.log(result)
    })

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state ={
        userProfilePic:'require(\'../Images/coolguy.png\')',
        userPseudo:'Kevin',
        userPseudoBackend:{},
        userLevel:'42',
        userSpeciality: 'Static',
        userDomain:'Street-Workout',
        showSkill:false,
        showProfile:false,
        listeEntreprises:{},
        
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
      //const list = {this.state.userPseudoBackend};
      const names = ['Bruce', 'Clark', 'Diane'];
      const nameList = names.map(name=><Text>{name}</Text>);
      
      return(
        
      <View style={styles.container}>
        <View style={{backgroundColor:'lightblue',flex: 1, alignItems: 'center'}}>
            <Image
            source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
            resizeMode = 'cover'
            style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }} />
            
             <View style={{marginTop:windowHeight*0.02}}><MyComponent navigation={this.props.navigation}/></View>
        </View>




        <View style={{backgroundColor:'lightgrey',flex:3,justifyContent:'center',alignItems:'center'}}>



          <Text style={{fontSize:20,marginBottom:windowHeight*0.01}}>Anciens documents : </Text>











        <ScrollView style={{backgroundColor:'grey',width:windowWidth*0.8,maxHeight:windowHeight*0.4}}>

        
        <View style={{flexDirection:'row',flex:1, backgroundColor:'lightyellow'}}>
          <View style={{backgroundColor:'lightgreen',flex:1}}>
            <Text style={{alignSelf:'center',marginBottom:20}}>ENTREPRISE</Text>
            <TouchableOpacity onPress={()=>alert('alerte')}>
              <Text>
                {(this.state.userPseudoBackend.companyname) ? this.state.userPseudoBackend.companyname : 'Chargement'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert('alerte')}>
              <Text>
                {(this.state.userPseudoBackend.entreprises) ? this.state.userPseudoBackend.entreprises : 'Chargement'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert('alerte')}>
              <Text>
                {nameList}
              </Text>
              <Text>
                {this.state.currentTime}
              </Text>
             
            </TouchableOpacity>
            
      
          </View>
            
          <View style={{backgroundColor:'lightblue',flex:1}}>
            <Text style={{alignSelf:'center',marginBottom:20}}>DATE</Text>
          </View>
        </View>

        
        



  
        </ScrollView>



        <Text>{(this.state.userPseudoBackend.companyname) ? this.state.userPseudoBackend.companyname : 'Chargement'}</Text>




        </View>
      </View>
    )
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
  
  boutons: {
    backgroundColor: '#0c77bd',
  },
  
})

export default HomeScreen