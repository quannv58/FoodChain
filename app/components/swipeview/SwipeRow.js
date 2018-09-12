import React, { Component } from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  ViewPropTypes,
  ScrollView
} from 'react-native';

import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({

});

class SwipeRow extends Component {
  render() {
    let {
      autoClose,
      backgroundColor,
      close,
      disabled,
      style,
      buttonWidth,
      leftTitle,
      rightTitle,
      leftBackgroundColor,
      rightBackgroundColor,
      leftTitleColor,
      rightTitleColor,
      onLeft,
      onRight,
      rightArray,
      leftArray,
      componentLeft,
      componentRight,
    } = this.props;

    let LeftContent = [
      {
        backgroundColor: leftBackgroundColor,
        color: leftTitleColor,
        component: componentLeft,
        onPress: onLeft ? onLeft : () => {}
      }
    ];

    let RightContent = [
      {
        backgroundColor: rightBackgroundColor,
        color: rightTitleColor,
        component: componentRight,
        onPress: onRight ? onRight : () => {}
      }
    ];

    return (
      <Swipeout
        autoClose={autoClose}
        backgroundColor={backgroundColor}
        close={close}
        disabled={disabled}
        left={componentLeft ? LeftContent : leftArray}
        right={componentRight ? RightContent : rightArray}
        style={[styles.container, style]}
        buttonWidth={buttonWidth}
        {...this.props}
      >
        {this.props.children}
      </Swipeout>
    );
  }
}

SwipeRow.defaultProps = {
  autoClose: true,
  backgroundColor: 'transparent',
  close: true,
  disabled: false,
  buttonWidth: 88,
  leftTitleColor: 'white',
  rightTitleColor: 'white',
  leftBackgroundColor: 'skyblue',
  rightBackgroundColor: 'orange'
}

SwipeRow.propTypes = {
  autoClose: PropTypes.bool,
  backgroundColor: PropTypes.string,
  close: PropTypes.bool,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
  buttonWidth: PropTypes.number,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  leftTitleColor: PropTypes.string,
  rightTitleColor: PropTypes.string,
  leftBackgroundColor: PropTypes.string,
  rightBackgroundColor: PropTypes.string,
  rightArray: PropTypes.array,
  leftArray: PropTypes.array
}

export default SwipeRow;
