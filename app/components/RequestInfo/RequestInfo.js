import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class RequestInfo extends Component {
  renderStatusContent() {
    const {buttonStatusStyle, buttonTextStyle} = styles;
    // Approve 1
    return (
      <View style={buttonStatusStyle}>
        <Text style={buttonTextStyle}>P</Text>
      </View>
    );

    // Approve 2
    return (
      <View style={buttonStatusStyle}>
        <Text style={buttonTextStyle}>P</Text>
      </View>
    );

    // Decline
    return (
      <View style={[buttonStatusStyle, {backgroundColor: '#f5a623'}]}>
        <Text style={buttonTextStyle}>!</Text>
      </View>
    );
  }

  renderTimeDetailContent(requestFrom, requestTo) {
    const {timeDetailContainerStyle, dateTimeStyle} = styles;
    return (
      <View style={timeDetailContainerStyle}>
        <Icon name="clock-o" size={16} color="#b6bec5" />
        <Text style={dateTimeStyle}>
          {requestFrom} đến {requestTo}
        </Text>
      </View>
    );
  }
  renderApproveTimeBlock(userApproveName, approveDatetime) {
    const {approveTimeContainerStyle,
      userApproveNameStyle, dateTimeStyle} = styles;
    return (
      <View style={approveTimeContainerStyle}>
        <Icon name="user" size={15} color="#b6bec5" />
        <Text style={userApproveNameStyle}>{userApproveName}</Text>
        <Icon name="clock-o" size={16} color="#b6bec5" style={
          {marginLeft: 7}
        } />
        <Text style={dateTimeStyle}>
          {approveDatetime}
        </Text>
      </View>
    );
  }

  render() {
    const {titleBlockStyle, titleStyle} = styles;
    const {
      userApproveName,
      approveDatetime,
      requestFrom,
      requestTo,
      title,
    } = this.props;
    return (
      <View>
        <View style={titleBlockStyle}>
          <Text style={titleStyle}>{title}</Text>
          {this.renderStatusContent()}
        </View>
        {this.renderTimeDetailContent(requestFrom, requestTo)}
        {this.renderApproveTimeBlock(userApproveName, approveDatetime)}
      </View>
    );
  }
}

export {RequestInfo};
