import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
import { AsyncStorage, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

import { login } from '../API/Api';
import { newSession } from '../redux/Session';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: '',
      password: ''
    };
    this.showPass = this.showPass.bind(this);
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  };

  handlePassword = (text) => {
    this.setState({ password: text })
  };

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={this.handleEmail}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
        <ButtonSubmit onPress={async () => await this.props.loginAndStoreSession(this.state.email, this.state.password)} />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginAndStoreSession: async (username,password) => {
        var sessionCookie = await login(username,password);
        if (sessionCookie) dispatch(newSession(sessionCookie));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);