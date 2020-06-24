import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import { Image } from 'react-native-elements';
import Button from 'apsl-react-native-button'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class JobScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      ok: 'ok',
    }
  }

  insertInfoMetierAndNav = () => {
    fetch('http:/192.168.1.33/SielBleu_backend/add_job_info.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nomMetier: this.state.Read_nomMetier,
        description: this.state.Read_description,

      })
    }).then((response) => response.text())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
    this.props.navigation.navigate('TasksScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={{ width: '20%', padding: 5 }}>
            <Button
              style={{ backgroundColor: '#0c77bd' }}
              textStyle={{ fontSize: 13, color: 'white' }}
              onPress={() => navigation.navigate('Entreprise')}>Entreprise</Button>
          </View>
          <View style={{ width: '19%', padding: 5 }}>
            <Button
              style={{ backgroundColor: '#34a4ed' }}
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
        <View style={styles.logo}>
          <Image
            source={{ uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif" }}
            resizeMode='cover'
            style={{ width: windowWidth * 0.3, height: windowHeight * 0.1 }} />

          <Text style={{ marginTop: 80 }}>Informations sur l'entreprise</Text>

          <TextInput
            placeholder="Entrer le nom du métier"
            onChangeText={nomMetier => this.setState({ Read_nomMetier: nomMetier })}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Entrer une description du métier"
            onChangeText={description => this.setState({ Read_description: description })}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
        </View>
        <View>


          <Button onPress={this.insertInfoMetierAndNav} style={{ backgroundColor: '#0c77bd' }} textStyle={{ fontSize: 25, color: 'white' }}>Suivant</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    height: '10%',
    flexDirection: 'row'
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
  logo: {
    flex: 1,
    alignItems: 'center',
    marginTop: windowHeight * 0.07,
  },
  boutons: {
    backgroundColor: '#0c77bd',
  },
  boutonNew: {
    backgroundColor: '#0c77bd',
    marginTop: windowHeight * 0.3,
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },

  title: {

    fontSize: 22,
    color: "#009688",
    textAlign: 'center',
    marginBottom: 15
  }
})

export default JobScreen