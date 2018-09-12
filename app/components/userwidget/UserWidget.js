import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles';

class UserWidget extends Component {
  renderStatus() {
    if (this.props.statusText) {
      const backgroundColor =
        this.props.statusColor ? this.props.statusColor : '#3db660';
      return (
        <View style={
          [styles.statusContainerStyle, {backgroundColor: backgroundColor}]
        }>
          <Text style={styles.statusTextStyle}>
            {this.props.statusText}
          </Text>
        </View>
      );
    }
  }
  render() {
    const {
      containerBackStyle,
      titleStyle,
      contentStyle,
      imageStyle,
    } = styles;

    return (
      <View style={[containerBackStyle, this.props.containerStyle]}>
        <Image
          style={imageStyle}
          source={{uri: this.props.imageUri}}
        />

        <View style={{marginLeft: 12}}>
          <Text style={[titleStyle, this.props.titleStyle]}>
            {this.props.userName}
          </Text>
          <Text style={[contentStyle, this.props.contentStyle, {marginTop: 5}]}>
            ID: {this.props.userId}
          </Text>
          <Text style={[contentStyle, this.props.contentStyle]}>
            {this.props.userPhone}
          </Text>
          <Text style={[contentStyle, this.props.contentStyle]}>
            {this.props.userRole}
          </Text>
        </View>
        {this.renderStatus()}
      </View>
    );
  }
}

export default UserWidget;
