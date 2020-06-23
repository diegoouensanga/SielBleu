import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Image, Button } from 'react-native-elements';


export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <Button 
            style={{backgroundColor: 'red', width:'10%'}}
            onPress={this.props.method} />
            </View>
        );
    }
}