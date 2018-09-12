import React, {Component} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  Platform,
  View,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

class FormPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    if (Platform.OS === 'android') {
      return (
        <View>
          <Picker
            selectedValue={this.props.value}
            onValueChange={this.props.onValueChange}
          >
            {this.props.items.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value}/>
            ))}
          </Picker>

          <View style={styles.separator}/>
        </View>
      );
    } else {
      const selectedItem = this.props.items.find(
        (i) => i.value === this.props.value
      );
      const selectedLabel = selectedItem ? selectedItem.label : '';

      return (
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}
          >
            <View pointerEvents='none'>
              <TextInput
                style={styles.input}
                editable={false}
                placeholder='Select item'
                onChangeText={(searchString) => {
                  this.setState({searchString});
                }}
                value={selectedLabel}
              />
            </View>
          </TouchableOpacity>

          <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.modalVisible}
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({modalVisible: false})}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={{color: 'blue', padding: 5, fontSize: 18}}
                    onPress={() => this.setState({modalVisible: false})}
                  >
                    Done
                  </Text>
                </View>
                <View
                  onStartShouldSetResponder={(evt) => true}
                  onResponderReject={(evt) => {
                  }}
                  style={{backgroundColor: 'white'}}
                >
                  <Picker
                    selectedValue={this.props.value}
                    onValueChange={this.props.onValueChange}
                  >
                    {this.props.items.map((i, index) => (
                      <Picker.Item
                        key={index}
                        label={i.label}
                        value={i.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

        </View>
      );
    }
  }
}

export default FormPicker;
