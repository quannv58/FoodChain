import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

let dismissKeyboard = require('dismissKeyboard');

const KeyBoardScroll = ({children, ...otherProps}) => {
  return (
      <KeyboardAwareScrollView
          extraHeight={150}
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="never"
          enableResetScrollToCoords={true}
          enableOnAndroid={true}
          scrollEnabled={false}
          {...otherProps}
        >
          {children}
      </KeyboardAwareScrollView>
  );
};

export default KeyBoardScroll;
