import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions,Alert } from 'react-native';
import { Image } from 'react-native-elements';
import Button from 'apsl-react-native-button'
import EntrepriseToMetier2 from '../Boutons/EntrepriseToMetier2';
import NouveauDoc from '../Boutons/NouveauDoc';
import EntrepriseToMetier from '../Boutons/EntrepriseToMetier';
import Child from '../Child';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export  function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
export  function JobScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Job Screen</Text>
      <GoToButton screenName="JobScreen" />
    </View>
  );
}

class CompanyScreen extends React.Component {
  constructor(props) {
    super(props)
    this._createAndNavigate = this._createAndNavigate.bind(this);
    this._helloWorld = this._helloWorld.bind(this);
    this._helloWorld2 = this._helloWorld2.bind(this);
    this._createCompteRendu = this._createCompteRendu.bind(this);

    this.state = {
      Read_id: '',
      Read_entreprise: '',
      Read_date_creation: '',
    }
  }

  _createCompteRendu = () => {
    fetch('http:/192.168.1.33/SielBleu_backend/create_compte_rendu.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.Read_id,
        entreprise: this.state.Read_entreprise,
        date_creation: this.state.Read_date_creation,
      })
    }).then((response) => response.text())
          .then((responseJson) => {
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
          }).catch((error) => {
            console.error(error);
          });
  }
  _createAndNavigate= () => {
    const navigation = useNavigation();
    this._createCompteRendu();
    navigation.navigate('JobScreen');
}
_helloWorld = ()  => {
  alert('Hello world!');
}

_helloWorld2 = () => {
  this._helloWorld();
  this._createCompteRendu();
}

    render() {
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

        <View style={{alignItems:'center'}}>
          <Text >Id</Text>
          <TextInput
          placeholder='1234'
          onChangeText={Read_id => this.setState({id : Read_id})}/>
          <Text >Date</Text>
          <TextInput
          placeholder='12/03/2020'
          onChangeText={Read_date_creation => this.setState({date_creation : Read_date_creation})}/>
          <Text >Nom de l'entreprise :</Text>
          <TextInput
          placeholder='Safran, Alstom...'
          onChangeText={Read_entreprise => this.setState({entreprise : Read_entreprise})}/>
        </View>
        <Child method={this._helloWorld2} />
        <EntrepriseToMetier2 method={this._createAndNavigate}/>
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
  }
})

export default CompanyScreen