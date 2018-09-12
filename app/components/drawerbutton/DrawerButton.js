import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export const DrawerButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 0, marginLeft: 10, marginBottom: 0, width: 70}}
        onPress={() => {
          props.navigation.navigate('DrawerOpen');
      }}
      >
        <Icon
          name="menu"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};
