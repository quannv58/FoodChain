import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {overlayStateChange} from '../actions/config';
import Root from '../navigator/root/Root';
import * as common from '../config/styles';

import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIndicator from '../components/loading/material-indicator/index';

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }

  _renderOverlay() {
    console.log('this.props.isShowLoading', this.props.isShowLoading);
    if (this.props.isShowLoading) {
      return (
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {Platform.OS === 'ios' ?
            (
              <MaterialIndicator color={'rgb(63,95,163)'}/>
            ) :
            (
              <Spinner
                visible={this.props.isShowLoading}
                // textContent={'Loading...'}
                color={'rgb(63,95,163)'}
                // textStyle={{color: 'red'}}
              />
            )
          }
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle={common.COLOR_STATUS_BAR}
        />
        <Root/>
        {this._renderOverlay()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  overlayView: state.overlay.overlayView,
  isShowLoading: state.overlay.isShowLoading,
});

export default connect(mapStateToProps, {
  overlayStateChange,
})(AppWithNavigationState);
