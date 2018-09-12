import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class SegmentControl extends Component {
  constructor(props) {
    super(props);
    const selected = this.props.selectedIndex ? this.props.selectedIndex : 0;
    const tintColor = this.props.tintColor ? this.props.tintColor : 'black';
    this.state = {
      selectedIndex: selected,
      tintColor: tintColor,
    };
  }

  onPressOption(index) {
    if (index != this.state.selectedIndex) {
      this.props.onChangeValue(index);
      this.setState({selectedIndex: index});
    }
  }

  _renderOption(item, index) {
    const {tintColor, selectedIndex} = this.state;
    const selected = index == selectedIndex;

    const containerBgColor = selected ?
      '#fff' : tintColor;
    const textColor = selected ?
      tintColor : '#fff';

    return (
      <TouchableOpacity
        style={[styles.optionContainer, {backgroundColor: containerBgColor}]}
        onPress={() => this.onPressOption(index)}
      >
        <Text style={[styles.optionText, {color: textColor}]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // this.props.arrayOptions.map((item, index) =>
          // this._renderOption(item, index))
          this._renderOption(this.props.firstTitle, 0)
        }

        {
          this._renderOption(this.props.secondTitle, 1)
        }
      </View>
    );
  }
}

SegmentControl.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  arrayOptions: PropTypes.array,
  onChangeValue: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  tintColor: PropTypes.string,
};
