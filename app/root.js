import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './config/store';
import AppWithNavigationState from './config/router';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
