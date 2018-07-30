import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Dimensions from 'Dimensions';

import bgSrc from '../images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundView} imageStyle={styles.backgroundImage} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover'
  }
});
