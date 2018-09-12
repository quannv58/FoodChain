import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

class UserInfor extends Component {

  render() {
    const {
      containerBackStyle,
      titleStyle,
      contentStyle,
      imageStyle
    } = style;

    return (
      <View style={[containerBackStyle, this.props.containerStyle]}>
       <Image
         style={imageStyle}
         source={{uri: this.props.imageUri}}
       />

        <View style={{ marginLeft: 12 }}>
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
      </View>
    );
  }
}

const style = {
  containerBackStyle: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    backgroundColor: '#E1DEDE'
  },
  titleStyle: {
    color: '#222223',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentStyle: {
    color: '#373738',
    fontSize: 14
  },
  imageStyle: {
    width: 60,
    height: 80
  }
};

export default UserInfor;
