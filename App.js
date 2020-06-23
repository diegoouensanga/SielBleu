import React, { Component } from 'react';
import {StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity,Image} from 'react-native';

import  {createStackNavigator } from '@react-navigation/stack';

const ThemeYellowColor = '#fbbc2a';
const ThemeBlueColor = '#0c77bd';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList:[]
    }
  }

  renderItem = ({item,index}) => {
    return (
        <View>
          <Image source={item.url} style={styles.itemImage}/>
        </View>
    )
  
  };

  render() {
    let {content, btnPressStyle,txtStyle} = styles;
    let {fileList} = this.state;
    return (
      <View style={content}>
        <Text>Sample</Text>
        <FlatList
        data={fileList}
        renderItem={this.renderItem}
        keyExtractor={(item,index) => index.toString()}
        extraDate={this.state}
        />
        <TouchableOpacity style={btnPressStyle}>
          <Text style={txtStyle}>Press Add Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex:1,
    alignItems:'center',
    marginTop:50,
    paddingLeft:30,
    paddingRight:30,
    marginBottom:30
   },
   btnPressStyle:{
     backgroundColor: '#0080ff',
     height:50,
     width:windowWidth-60,
     alignItems:'center',
     justifyContent:'center'
   },
   txtStyle:{
     color:'#ffffff',
   },
   itemImage:{
     backgroundColor:'#2F455C',
     height:150,
     width:windowWidth - 60,
     borderRadius: 8,
     resizeMode:'contain' //Scale the image uniformly



   }
});