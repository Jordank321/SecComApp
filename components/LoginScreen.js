import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import SignupSection from './SignupSection';

import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loadSession } from '../redux/Session';

class LoginScreen extends Component {

  state = {}

  componentDidMount = async () => {    
    await this.props.loadSession();
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    alert(`Has session: ${nextProps.hasSession}`)
    if (nextProps.hasSession) Actions.secondScreen();
    return null;
  }

  render() {
    return (
      <Wallpaper>
        <ScrollView>
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
    hasSession: (state.Session.current !== null)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSession: async () => dispatch(await loadSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);