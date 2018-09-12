import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const ReasonDetail = ({content}) => {
  const {containerStyle, contentStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text>Lý do</Text>
      <Text style={contentStyle}>
        {content}
      </Text>
    </View>
  );
};

export {ReasonDetail};
