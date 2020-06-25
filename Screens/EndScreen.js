import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import Button from 'apsl-react-native-button';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class EndScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProfilePic: 'require(\'../Images/coolguy.png\')',
      userPseudo: 'Kevin',
      userLevel: '42',
      userSpeciality: 'Static',
      userDomain: 'Street-Workout',
      showSkill: false,
      showProfile: false
    }
  }
  jsPdfGenerator = () => {
    const doc = new jsPdf('p','pt');
    doc.text(20,20,'This is default text');
    doc.setFont('courier');
    doc.setFontType('normal');
    doc.text(20,30,'This is text with the courier font');
    doc.save("generated.pdf");

  }
  onPrint() {
    const { vehicleData } = this.props.parkedVehicle;
    const { 
    plate_no,
      max_time,
      entry_date_time,
      exit_date_time,
      expiry_time,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      parking_status
    } = vehicleData;

    const pdfConverter = require('jspdf');
    //var converter = new pdfConverter();
    //var doc = converter.jsPDF('p', 'pt');

    const doc = new pdfConverter('p','pt','c6');

    doc.setFontSize(22);
    doc.text(20, 50, 'Park Entry Ticket');
    doc.setFontSize(16);
    doc.text(20, 80, 'Address1: ' + address1);
    doc.text(20, 100, 'Address2: ' + address2);
    doc.text(20, 120, 'Entry Date & time: ' + entry_date_time);
    doc.text(20, 140, 'Expiry date & time: ' + exit_date_time);
    doc.save("test.pdf");

    const pdf = doc.output('blob');

  const data = new FormData();
  data.append('data' , pdf);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status !== 200) {
        // handle error
      }
    }
  }

xhr.open('POST', 'http:/192.168.1.33/SielBleu_backend/upload.php', true);
xhr.send(data);
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
              style={{ backgroundColor: '#34a4ed' }}
              textStyle={{ fontSize: 11, color: 'white' }}
              onPress={() => navigation.navigate('Fin')}>Générations documents</Button>
          </View>
        </View>
        <View style={styles.centrage}>
          <Image
            source={{ uri: "https://files.sbcdnsb.com/images/vpli8sqozemg/content/1500372150/298192/100/logssb.gif" }}
            resizeMode='cover'
            style={{ width: windowWidth * 0.3, height: windowHeight * 0.1 }} />
          <Button
            style={{ backgroundColor: '#0e87d8' }}
            textStyle={{ fontSize: 20, color: 'white' }}
            onPress={() => navigation.navigate('Métier')}>Ajouter un métttier</Button>
          <Button
            style={{ backgroundColor: '#0e87d8' }}
            textStyle={{ fontSize: 20, color: 'white' }}
            onPress={() => navigation.navigate('Taches')}>Ajouter une tache</Button>
          <Button
            style={{ backgroundColor: '#0e87d8' }}
            textStyle={{ fontSize: 20, color: 'white' }}
            onPress={this.jsPdfGenerator}>Générer le diagnostic</Button>
          <Button
            style={{ backgroundColor: '#0e87d8' }}
            textStyle={{ fontSize: 20, color: 'white' }}
            onPress={() => alert('Routine générée')}>Générer la routine d'échauffement</Button>
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
  }
})
