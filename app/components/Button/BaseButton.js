import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

class BaseButton extends Component {
  render() {
    const {
      containerStyle,
      titleStyle,
      inactiveContainerStyle,
      inactiveTextStyle,
    } = style;

    const hideShadow = this.props.hideShadow ? {shadowOpacity: 0} : null;
    if (this.props.isDisable) {
      return (
        <View>
          <View style={[this.props.style, inactiveContainerStyle, hideShadow]}>
            <Text style={[inactiveTextStyle, this.props.inactiveTitleStyle]}>
              {this.props.title}
            </Text>
          </View>
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={[this.props.style, containerStyle, hideShadow]}
        onPress={() => this.props.onPress()}
      >
        <View>
          <Text style={[titleStyle, this.props.titleStyle]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = {
  containerStyle: {
    borderRadius: 2,
    shadowColor: '#0000003c',
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  inactiveContainerStyle: {
    borderRadius: 2,
    shadowColor: '#0000003c',
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#d8dee3',
  },
  inactiveTextStyle: {
    color: '#89263347',
    fontSize: 16,
  },
  titleStyle: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
};

export default BaseButton;
