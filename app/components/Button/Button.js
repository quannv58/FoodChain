import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = ({onPress, title, style, btnStyle}) => {
  const {textStyle, buttonStyle} = styles;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[buttonStyle, btnStyle]}
      onPress={onPress}>
      <Text style={[textStyle, style]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};
