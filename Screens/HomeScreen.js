import React from 'react';

import { View, StyleSheet, Dimensions,Text,TouchableOpacity,Modal,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Image, CheckBox, } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 class HomeScreen extends React.Component {

  constructor(){
    super()
    this.state ={
        
        company1: {},
        showAnciensDiagnostics:false,
        bool:true
        
    }
}

componentDidMount(){ //une fois que le component est monté, on executé ça
    fetch('http:/192.168.1.33/SielBleu/endpoint.php')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        setTimeout(() => {
            this.setState({company1: result})
        },1500);
        
    })
}

  render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
            <Image
            source={{uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif"}}
            resizeMode = 'cover'
            style={{ width: windowWidth * 0.3, height: windowHeight*0.1 }} />
            <Button 
            buttonStyle={styles.boutonNew}
            title="Nouveau Diagnostic"
            type="solid"
            onPress={() => navigation.navigate('Entreprise')} />
            <Button 
            buttonStyle={styles.boutonNew}
            title="Anciens Diagnostics"
            type="solid"
            onPress={() => {this.setState({showAnciensDiagnostics:true})}} />
            
        </View>
        {/* PROFILE */}
        <Modal
                transparent={true}
                visible={this.state.showAnciensDiagnostics}>
                    <View style={{backgroundColor:'#000000aa',flex:1}}>
                        <View style={styles.modals}>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                            style={{size:50,alignSelf:'flex-start',backgroundcolor:'lightblue'}}
                            onPress={()=>{this.setState({showAnciensDiagnostics:false})}}>
                                <Icon name="ios-close" size={50} color="black" /> 
                            </TouchableOpacity>
                            <Text style={{fontSize:50,marginTop:'-4%',marginLeft:'10%'}}>Anciens Diagnostics</Text>
                            </View>
                            <ScrollView style={{backgroundColor:'lightgrey'}}>
                            
                            <TouchableOpacity style={{alignItems:'center'}}>
                                
                                <Text style={{fontSize:18}}>{this.state.userPseudo}</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{marginLeft:10,width:100,height:50,backgroundColor:'white'}}><Text>{(this.state.company1.companyname) ? this.state.company1.companyname : 'Chargement'}</Text>
                            </TouchableOpacity>
                            <Text>yo</Text>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
                {/* END PROFILE */}
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
    marginTop: 30,
  },
  modals: {backgroundColor:'#ffffff',marginHorizontal:'5%',marginVertical:'10%',padding:15,borderRadius:10,flex:1}
});

export default HomeScreen