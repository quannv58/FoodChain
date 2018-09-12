import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Constants} from '../../config/settings';

export default class DropDown extends Component {
  _renderRow({item, index}) {
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => this.props.onPress(index)}
      >
        <Text style={index === this.props.indexSelectedDropDown ? styles.rowTitleSelected : styles.rowTitle}>
          {item}
        </Text>
        {index === this.props.indexSelectedDropDown ? <Icon
          name={'check'}
          size={20}
          color={'#3f5fa3'}
          style={{marginRight: 15}}
        /> : null}
      </TouchableOpacity>
    );
  }

  _renderSeparator() {
    return (
      <View
        style={styles.rowSeparator}
      />
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, Constants.IS_IOS ? null : {bottom: 1}]}
        onPress={() => this.props.onDismiss()}
        activeOpacity={1}
      >
        <View>
          <FlatList
            style={{backgroundColor: '#fff'}}
            data={this.props.data}
            renderItem={(item, index) => this._renderRow(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

DropDown.propTypes = {
  data: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  onDismiss: PropTypes.func,
};
