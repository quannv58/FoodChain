import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  ViewPropTypes,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as common from '../../config/styles';
import styles from './InputLabel.styles';

class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      text: this.props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value) {
      this.setState({text: nextProps.value || ''});
    }
  }

  onFocus() {
    this.setState({
      isFocus: true,
    });
  }

  focus() {
    this.refs[this.props.textInputRef].focus();
  }

  onBlur() {
    this.setState({
      isFocus: false,
    });
  }

  onChangeText(text) {
    this.props.onChangeText(text);
    this.setState({
      isFocus: true,
      text: text,
    });
  }

  render() {
    let {
      style,
      titleHeader,
      placeholder,
      placeholderTextColor,
      maxLength,
      editable,
      selectionColor,
      textInputRef,
      returnKeyType,
      error,
      errorStyle,
      rightIcon,
      separatorStyle,
      titleError,
      multiline,
      ...otherProps
    } = this.props;

    let {
      text,
      // isFocus
    } = this.state;

    const renderRightIcon = (
      <View style={styles.rightButton}>
        <Icon style={styles.image} name="check" size={14} color="green"/>
      </View>
    );

    return (
      <View>
        <View
          style={[
            styles.container,
            style,
          ]}
        >

          <Text style={styles.titleView}>{titleHeader}</Text>

          <TextInput
            style={[styles.TextInput, rightIcon ?
              {paddingRight: 20} : undefined]}
            ref={textInputRef}
            underlineColorAndroid='transparent'
            returnKeyType={returnKeyType}
            autoCapitalize='none'
            autoCorrect={false}
            // maxLength={maxLength}
            editable={editable}
            numberOfLines={1}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            selectionColor={selectionColor}
            onChangeText={(text) => this.onChangeText(text)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            value={text}
            {...otherProps}
          />
          {rightIcon && renderRightIcon}
          {/*<View*/}
            {/*style={[*/}
              {/*styles.separator,*/}
              {/*separatorStyle ? separatorStyle : undefined,*/}
              {/*error ? errorStyle || styles.viewError : '',*/}
              {/*// isFocus ? styles.viewFocus : '',*/}
              {/*styles.viewFocus,*/}
            {/*]}*/}
          {/*/>*/}
        </View>
        {
          (error && titleError) &&
          <Text numberOfLines={1} style={styles.txtError}>{titleError}</Text>
        }
      </View>
    );
  }
}

InputLabel.defaultProps = {
  placeholder: '',
  placeholderTextColor: common.COLOR_TEXT_PLACEHOLDER,
  maxLength: 256,
  editable: true,
  selectionColor: common.COLOR_BACKGROUND_BUTTON,
  error: false,
  returnKeyType: 'next',
  rightIcon: false,
};

InputLabel.propTypes = {
  style: ViewPropTypes.style,
  multiline: PropTypes.bool,
  focusStyle: ViewPropTypes.style,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  maxLength: PropTypes.number,
  editable: PropTypes.bool,
  selectionColor: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  textInputRef: PropTypes.string,
  error: PropTypes.bool,
  errorStyle: ViewPropTypes.style,
  returnKeyType: PropTypes.string,
  focus: PropTypes.func,
  value: PropTypes.string,
  rightIcon: PropTypes.bool,
  separatorStyle: ViewPropTypes.style,
  titleError: PropTypes.string,
};
export default InputLabel;
