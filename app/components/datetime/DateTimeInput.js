import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import * as common from '../../config/styles';
import styles from './styles';
import DatePicker from './DatePicker';

class DateTimeInput extends Component {
  constructor(props) {
    super(props);
  }

  renderDatePicker() {
    let {
      title,
      mode,
      date,
      minDate,
      maxDate,
      format,
      onPress,
      disabled,
      placeHolderDatePicker,
    } = this.props;
    if (date) {
      return (
        <DatePicker
          mode={mode}
          format={format}
          date={date}
          placeHolderDatePicker={placeHolderDatePicker}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {
            onPress(date);
          }}
          disabled={disabled}
        />
      );
    }
    return (
      <DatePicker
        mode={mode}
        format={format}
        placeholder='- -'
        date={date}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        placeHolderDatePicker={placeHolderDatePicker}
        onDateChange={(date) => {
          onPress(date);
        }}
        disabled={disabled}
      />
    );
  }

  render() {
    return (
      <View>
        <View
          style={styles.container}
        >
          <Text style={styles.titleView}>
            {this.props.title}
          </Text>
          {this.renderDatePicker()}
        </View>
      </View>
    );
  }
}

DateTimeInput.defaultProps = {
  title: '',
  mode: 'date',
  date: '',
  minDate: '',
  maxDate: '',
  format: 'YYYY-MM-DD',
};

DateTimeInput.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  format: PropTypes.string,
  placeHolderDatePicker: PropTypes.string,
  onPress: PropTypes.func,
};

export default DateTimeInput;
