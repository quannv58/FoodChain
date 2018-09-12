import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import * as common from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: (Platform.OS === 'ios') ? 20 : 10,
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: common.COLOR_SEPARATOR,
    backgroundColor: common.COLOR_BACKGROUND_NABAR
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    color: common.COLOR_TEXT_NAVBAR,
    fontSize: common.FONT_SIZE_TITLE,
    fontWeight: common.FONT_WEGHT_TITLE,
    alignSelf: 'center'
  },
  headerStyle: {
    color: common.COLOR_TEXT_NAVBAR,
    fontSize: common.FONT_SIZE_HEADER,
    fontWeight: common.FONT_WEGHT_HEADER
  },
  leftIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  rightIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 18,
    height: 18
  },
  leftView: {
    width: 38,
    height: 18,
  },
  rightView: {
    width: 38,
    height: 18,
  }
})

class CustomNavBar extends Component {
  handleLeft() {
    if (this.props.onLeft) {
      this.props.onLeft()
    }
  }

  handleRight() {
    if (this.props.onRight) {
      this.props.onRight()
    }
  }

  render() {
    let {
      style,
      rightIcon,
      rightImage,
      leftIcon,
      leftImage,
      title,
      titleStyle,
      leftStyle,
      rightStyle,
      leftTitle,
      rightTitle,
      back,
      onTitle
    } = this.props

    const renderMiddle = (
      <View style={styles.navBarItem}>
        {
          onTitle ? (
            <TouchableOpacity onPress={onTitle}>
              <Text style={[styles.titleStyle, titleStyle]}>
                {title}
              </Text>
            </TouchableOpacity>
          ) : (
              <Text style={[styles.titleStyle, titleStyle]}>
                {title}
              </Text>
            )
        }

      </View>
    )

    const renderLeftIcon = (
      <TouchableOpacity
        onPress={back ? Actions.pop : this.handleLeft.bind(this)}
        style={[styles.leftIcon, leftImage ? {} : { paddingLeft: 0 }]}>
        {
          leftImage ? <Image
            style={[styles.icon, leftStyle]}
            resizeMode="contain"
            source={leftImage}
          /> : <Icon style={{ paddingLeft: 0 }} name='chevron-left' size={36} color="#fff" />
        }
      </TouchableOpacity>
    )

    const renderLeftTitle = (
      <TouchableOpacity
        onPress={back ? Actions.pop : this.handleLeft.bind(this)}
        style={styles.leftIcon}>
        <Text style={[styles.headerStyle, leftStyle]}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
    )

    const renderRightIcon = (
      <TouchableOpacity
        onPress={this.handleRight.bind(this)}
        style={[styles.rightIcon, rightImage ? {} : { paddingRight: 2 }]}>
        {
          rightImage ? <Image
            style={[styles.icon, rightStyle]}
            resizeMode="contain"
            source={rightImage}
          /> : <Icon name='menu' size={36} color="#fff" />
        }
      </TouchableOpacity>
    )

    const renderRightTitle = (
      <TouchableOpacity
        onPress={this.handleRight.bind(this)}
        style={styles.rightIcon}>
        <Text style={[styles.headerStyle, rightStyle]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    )

    return (
      <View style={[styles.container, style]}>
        {
          leftIcon ? renderLeftIcon : leftTitle ? renderLeftTitle : <View style={[styles.leftView]} />
        }
        {
          title ? renderMiddle : <View />
        }
        {
          rightIcon ? renderRightIcon : rightTitle ? renderRightTitle : <View style={[styles.rightView]} />
        }
      </View>
    )
  }
}

CustomNavBar.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: ViewPropTypes.style,
  leftIcon: PropTypes.bool,
  leftImage: Image.propTypes.source,
  leftTitle: PropTypes.string,
  leftStyle: ViewPropTypes.style,
  rightIcon: PropTypes.bool,
  rightImage: Image.propTypes.source,
  rightTitle: PropTypes.string,
  rightStyle: ViewPropTypes.style,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  onTitle: PropTypes.func,
  back: PropTypes.bool,
}

export default CustomNavBar;