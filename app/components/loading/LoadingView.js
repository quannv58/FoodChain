import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import {overlayStateChange} from '../../actions/config';
import MaterialIndicator from './material-indicator/index';

export default class LoadingView extends Component {
  static singleton = null;

  static sharedInstance() {
    if (!this.singleton) {
      this.singleton = new LoadingView();
    }
    return this.singleton;
  }

  setStore(_store) {
    store = _store;
  }

  createView() {
    return (
      <LoadingView/>
    );
  }

  /**
   *To hide loading, using LoadingView.sharedInstance().hide();
   **/
  hide() {
    // store.dispatch(overlayStateChange(null));
  }

  /**
   *To show loading, using LoadingView.sharedInstance().show();
   **/
  show() {
    // const view = this.createView();
    // store.dispatch(overlayStateChange(view));
  }

  render() {
    return (
      <View style={styles.root}>
        <MaterialIndicator color='rgb(63,95,163)' />
      </View>
    );
  }
}

let store = null;

