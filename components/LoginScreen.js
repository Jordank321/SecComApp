import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import SignupSection from './SignupSection';

import { ScrollView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { loadSession } from '../redux/Session';

class LoginScreen extends Component {

  state = {}

  componentDidMount = async () => {    
    this.props.loadSession();
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.hasSession) Actions.messagesScreen({type: ActionConst.REPLACE});
    return null;
  }

  render() {
    return (
      <Wallpaper>
        <ScrollView keyboardShouldPersistTaps='handled'>
          <Logo />
          <Form />
          <SignupSection />
        </ScrollView>
      </Wallpaper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasSession: (state.Session.current || null) !== null
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSession: () => dispatch(loadSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);