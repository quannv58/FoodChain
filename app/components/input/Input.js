import React, { Component } from 'react'
import { StyleSheet, View, Text,Image,TextInput,Button } from 'react-native'
import langs from '../../languages/login'
import * as common from '../../config/styles'

class Input extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <TextInput
          style= {styles.input}
          placeholder={this.props.placeholder}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 286,
    height: 36,
    borderWidth: 1,
    alignSelf: 'center',
    paddingLeft: 10,
  },
})

export default Input;
