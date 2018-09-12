import React, {Component} from 'react';
import Root from './app/root';
import {Text, View} from 'react-native';

export default class App extends Component<{}>{
    render() {
        // default font app
        Text.defaultProps.style = {fontFamily: 'Roboto-Regular'};
        return (
            <View></View>
        );
    }
}
