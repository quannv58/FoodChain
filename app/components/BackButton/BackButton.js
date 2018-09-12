import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const BackButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 0, marginLeft: 5, marginBottom: 0, width: 70}}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={35} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
