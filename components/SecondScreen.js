import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, TouchableOpacity, Animated } from 'react-native';
import {Actions} from 'react-native-router-flux';
import arrowImg from '../images/left-arrow.png';
import { deleteSession } from '../redux/Session';

const SIZE = 40;

class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  async _onPress() {
    await this.props.deleteSession();
    Actions.pop();
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPress}
          style={styles.button}
          activeOpacity={1}>
          <Image style={styles.image} source={arrowImg} />
        </TouchableOpacity>
        <Animated.View
          style={[styles.circle, {transform: [{scale: changeScale}]}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSession: async () => dispatch(await deleteSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);