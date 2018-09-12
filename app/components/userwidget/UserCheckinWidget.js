import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class UserCheckinWidget extends Component {
  renderLocationBlock() {
    const {locationContainerStyle, dateTimeStyle} = styles;
    return (
      <View style={locationContainerStyle}>
        <Icon name="map-marker" size={16} color="#3db660" />
        <Text style={dateTimeStyle}>
          Keangnam, Mễ Trì, Từ Liêm, Hà Nội, VN
        </Text>
      </View>
    );
  }
  renderApproveTimeBlock() {
    const {timeContainerStyle, dateTimeStyle} = styles;
    return (
      <View style={timeContainerStyle}>
        <Icon name="clock-o" size={16} color="#b6bec5" />
        <Text style={dateTimeStyle}>
          1/03/2018 - 08:00 SA
        </Text>
      </View>
    );
  }
  render() {
    const {
      containerBackStyle,
      titleStyle,
      checkingImageStyle,
    } = styles;

    return (
      <View style={[containerBackStyle, this.props.containerStyle]}>
        <Image
          style={checkingImageStyle}
          source={{uri: this.props.imageUri}}
        />

        <View style={{marginLeft: 12}}>
          <Text style={[titleStyle, this.props.titleStyle]}>
            CHECK-IN
          </Text>
          {this.renderApproveTimeBlock()}
          {this.renderLocationBlock()}
        </View>
      </View>
    );
  }
}

export default UserCheckinWidget;
