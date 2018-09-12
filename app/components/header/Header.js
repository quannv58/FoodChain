import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  View,
  Text,
} from 'react-native';

class Header extends Component {
  renderLeftView() {
    return (this.props.leftView);
  }

  renderRightView() {
    return (this.props.rightView);
  }

  render() {
    const {
      containerBackStyle,
      titleStyle,
      leftViewStyle,
      rightViewStyle,
    } = style;

    return (
      <SafeAreaView style={containerBackStyle}>
        <View style={leftViewStyle}>
          {this.renderLeftView()}
        </View>
        <Text style={[titleStyle, this.props.titleStyle]}>
          {this.props.title}</Text>
        <View style={rightViewStyle}>
          {this.renderRightView()}
        </View>
      </SafeAreaView>
    );
  }
}

const style = {
  containerBackStyle: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3f5fa3',
  },
  titleStyle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  leftViewStyle: {
    width: 30,
    alignItems: 'flex-end',
  },
  rightViewStyle: {
    width: 30,
  },
};

export default Header;
