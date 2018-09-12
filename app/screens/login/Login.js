import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import StyleSheet from './styles';
import KeyBoardScroll from '../../components/keyboardScroll/KeyBoardScroll';

class Login extends Component {

  render() {
    const {
      container
    } = StyleSheet;

    return (
      <KeyBoardScroll>
      <KeyboardAvoidingView
        style={container}
        behavior="padding">
        <StatusBar barStyle="default"/>
      </KeyboardAvoidingView>
      </KeyBoardScroll>
    );
  }
}

export default Login;
