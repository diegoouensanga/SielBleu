import React from 'react';

import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

import { Button, Image, CheckBox, TextInput } from 'react-native-elements';

import { TouchableOpacity } from 'react-native-gesture-handler';
import NouveauDoc from '../Boutons/NouveauDoc';



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
  constructor() {
    super()
    this.state = {
      image: null,
      Read_id: '',
      Read_entreprise: '',
      Read_date_creation: '',
      userPseudoBackend: {},
      userPhoto: {},
      UserName: '',
      UserEmail: '',
      UserPassword: ''
    }
  }

  componentDidMount() {
    //une fois que le component est monté, on executé ça
    fetch('http:/192.168.1.33/SielBleu_backend/showEntreprises.php')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setTimeout(() => {
          this.setState({ userPseudoBackend: result })
        });

      })
    //une fois que le component est monté, on executé ça
    fetch('http:/192.168.1.33/SielBleu_backend/showPhoto.php')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setTimeout(() => {
          this.setState({ userPhoto: result })
          
        });

      })
  }
  createCompteRendu = () => {
    fetch('http:/192.168.1.33/SielBleu_backend/create_compte_rendu.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        name: this.state.UserName,

        email: this.state.UserEmail,

        password: this.state.UserPassword
      })
    }).then((response) => response.text())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    //const list = {this.state.userPseudoBackend};
    const names = ['Bruce', 'Clark', 'Diane'];
    const nameList = names.map(name => <Text>{name}</Text>);

    return (

      <View style={styles.container}>
        <View style={{ backgroundColor: 'lightblue', flex: 1, alignItems: 'center' }}>
          <Image
            source={{ uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif" }}
            resizeMode='cover'
            style={{ width: windowWidth * 0.3, height: windowHeight * 0.1 }} />

          <View style={{ marginTop: windowHeight * 0.02 }}><NouveauDoc navigation={this.props.navigation}

          />
          </View>
        </View>

        <View style={{ backgroundColor: 'lightgrey', flex: 3, justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{ fontSize: 20, marginBottom: windowHeight * 0.01 }}>Anciens documents : </Text>
          <View style={styles.activeImageContainer}>

            
              <Text>{this.state.userPhoto.photo1}</Text> 
              
          
          <Image
          source={{uri: this.state.userPhoto.photo1 ? this.state.userPhoto.photo1 : 'images/unnamed.png'}}
          resizeMode = 'contain'
          style={{ width: 100, height: 100 }}/>
   
          </View>

          <ScrollView style={{ backgroundColor: 'grey', width: windowWidth * 0.8, maxHeight: windowHeight * 0.4 }}>


            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'lightyellow' }}>
              <View style={{ backgroundColor: 'lightgreen', flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginBottom: 20 }}>ENTREPRISE</Text>
                <TouchableOpacity onPress={() => alert('alerte')}>
                  <Text>
                    {(this.state.userPseudoBackend.companyname) ? this.state.userPseudoBackend.companyname : 'Chargement'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('alerte')}>
                  <Text>
                    {(this.state.userPseudoBackend.entreprises) ? this.state.userPseudoBackend.entreprises : 'Chargement'}
                  </Text>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('alerte')}>
                  <Text>
                    {nameList}
                  </Text>
                  <Text>
                    {this.state.currentTime}
                  </Text>

                </TouchableOpacity>


              </View>

              <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginBottom: 20 }}>DATE</Text>
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
    flex: 1,
  },
  activeImageContainer: {
    flex: 5,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#eee",
    borderBottomWidth: 0.5,
    borderColor: "#fff"
   },
  centrage: {
    flex: 1,
    alignItems: 'center',
  },
  bouton: {
    marginTop: windowHeight * 0.2,
    flex: 1,
  },
  boutonDouble: {
    flex: 1,
    flexDirection: 'row'
  },

  boutons: {
    backgroundColor: '#0c77bd',
  },

})

export default HomeScreen