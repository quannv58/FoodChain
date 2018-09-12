import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Animated,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import {IC_EYE_HIDE, IC_EYE_SHOW, IC_DELETE} from './styles';

class TextInputView extends Component {
  state = {
    textValueColor: normalColor,
    textFieldColor: normalColor,
    buttonColor: normalColor,
    eyeShow: true,
    error: false,
    errorTitle: '',
    isDisable: false,
    icDelete: false,
    value: '',
  };

  onFocus() {
    const buttonFocusColor = this.props.buttonFocusColor;
    const textcolor = this.props.textValuesColor;
    this.setState({textFieldColor: focusColor, error: false});
    this.setState({buttonColor: buttonFocusColor, error: false});
    this.setState({icDelete: true, error: false});
    this.setState({textValueColor: textcolor, error: false});
  }

  onBlur() {
    this.setState({textFieldColor: normalColor, error: false});
    this.setState({buttonColor: normalColor, error: false});
    this.setState({textValueColor: focusColor, error: false});
    this.setState({error: this.props.error});
    this.setState({errorTitle: this.props.errorTitle});
  }

  onEyePress() {
    this.setState({eyeShow: !this.state.eyeShow});
  }

  onDeletePress() {
    this.setState({eyeShow: !this.state.eyeShow});
  }

  showErrorState(errorTitle) {
    this.setState({textFieldColor: errorColor, error: true, errorTitle});
  }


  renderEyeButton() {
    const {
      eyeButtonStyle,
      eyeImageStyle,
    } = styles;
    const icon = !this.state.eyeShow ? IC_EYE_SHOW : IC_EYE_HIDE;
    if (this.props.havingEye) {
      return (
        <TouchableOpacity
          style={eyeButtonStyle}
          onPress={() => this.onEyePress()}>
          <Image
            style={eyeImageStyle}
            source={icon}
          />
        </TouchableOpacity>
      );
    }
  }

  renderDeleteButton() {
    const {
      eyeButtonStyle,
      deleteImageStyle,
    } = styles;
    const ic = this.state.icDelete ? IC_DELETE : IC_DELETE;
    if (this.props.havingDelete && this.props.value) {
      return (
        <TouchableOpacity
          style={eyeButtonStyle}
          onPress={this.props.onDeletePress}>
          <Image
            style={deleteImageStyle}
            source={ic}
          />
        </TouchableOpacity>
      );
    }
  }

  renderErrorTitle() {
    const {errorTitleStyle} = styles;
    if (this.state.error) {
      return (
        <Text style={errorTitleStyle}>
          {this.state.errorTitle}
        </Text>
      );
    }
  }

  render() {
    const {
      titleStyle,
      textContainerStyle,
      textInputStyle,
      borderStyle,
    } = styles;

    const color = this.state.textFieldColor;
    let isSecureText = this.props.secureTextEntry;
    const isDisable = this.props.isBlockEdit;
    const textFieldColor = this.props.textFieldColor;
    const buttonColor = this.state.buttonColor;
    const textValueColor = this.state.textValueColor;
    const inputStyle = isDisable
      ? {
        color: '#000',
        borderColor: '#b6bec5',
      } : null;
    if (this.props.havingEye) {
      isSecureText = this.state.eyeShow;
    }
    return (

      <Animated.View style={this.props.style}>
        <Text style={[titleStyle, {color: textFieldColor}]}>
          {this.props.title}
        </Text>
        <View style={[textContainerStyle, this.props.containerStyle]}>
          <TextInput
            style={[textInputStyle,
              {borderColor: color, color: textValueColor},
              inputStyle,
              this.props.inputStyle]}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            secureTextEntry={isSecureText}
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            onChangeText={this.props.onChangeText}
            autoCapitalize={this.props.autoCapitalize}
            placeholder={this.props.placeholder}
            editable={!isDisable}
            value={this.props.value}
            multiline={this.props.multiline || false}
            maxLength={this.props.maxlength}
            numberOfLines={this.props.numberOfLines || 1}
          />
          <View style={[borderStyle, {borderColor: buttonColor}]}/>
          {this.renderEyeButton()}
          {this.renderDeleteButton()}
        </View>
        {this.renderErrorTitle()}
      </Animated.View>
    );
  }
}

const normalColor = '#b6bec5';
const focusColor = '#000';


export {TextInputView};
