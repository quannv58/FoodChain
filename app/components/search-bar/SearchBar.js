import React, {Component} from 'react';
import {
  View,
  TextInput,
  Animated,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import langs from './langs';
import PropTypes from 'prop-types';
import {Constants} from '../../config/settings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class SearchBar extends Component {
  state = {
    editing: false,
  };

  componentWillUpdate() {
    Animated.decay();
  }

  searchInputOnFocus() {
    this.setState({editing: true});
  }

  onPressCancel() {
    this.setState({editing: false});
    Keyboard.dismiss();
  }

  _renderCancelButton() {
    if (this.state.editing) {
      return (
        <TouchableOpacity
          onPress={() => this.onPressCancel()}
        >
          <Text style={styles.cancelButton}>
            {langs.cancel}
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.root}>
        <Animated.View style={[styles.searchContainer,
          Constants.IS_IOS ? {height: 32} : {height: 40}]}>
          <View style={styles.textInputContainer}>
            <Icon
              name={'search'}
              size={16}
              color={'#8e8e93'}
              style={styles.iconSearch}
            />
            <TextInput
              style={styles.textInput}
              placeholder={langs.search}
              fontSize={16}
              onFocus={() => this.searchInputOnFocus()}
              onChangeText={(text) => this.props.onChangeTextSearchBar(text)}
              underlineColorAndroid='rgba(0,0,0,0)'
            />
          </View>
          {/*{this._renderCancelButton()}*/}
        </Animated.View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  onChangeTextSearchBar: PropTypes.func.isRequired,
}
