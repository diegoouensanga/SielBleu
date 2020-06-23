import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import Button from 'apsl-react-native-button'

import Child from './Child';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.helloWorld = this.helloWorld.bind(this);
    }

    helloWorld() {
        alert('Hello world!');
    }

    render() {
        return (
            <View style={{marginTop:50}}>
              <Child method={this.helloWorld} />
            </View>
        );
    }
}