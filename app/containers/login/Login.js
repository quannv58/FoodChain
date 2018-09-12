import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../../screens/login/Login';
import KeyBoardScroll from '../../components/keyboardScroll/KeyBoardScroll';

class Login extends Component {
  render() {
    return (
      <KeyBoardScroll>
        <LoginComponent {...this.props}/>
      </KeyBoardScroll>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
