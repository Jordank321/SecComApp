import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Dimensions, View } from 'react-native';
import { resetNavigation } from './navigation/Helpers'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import SettingsTab from './MessagesScreenTabs/Settings';
import ConversationsTab from './MessagesScreenTabs/Conversations'
import { getConversations } from '../redux/Conversations';

const SIZE = 40;

class MessagesScreen extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Conversations' },
        { key: 'second', title: 'Settings' },
      ],
    };
  }

  componentDidMount = async () => {    
    this.props.getConversations(this.props.sessionCookie);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    alert(JSON.stringify(nextProps.conversations));
    return null
  }

  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={SceneMap({
          first: ConversationsTab,
          second: SettingsTab,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height:  Dimensions.get('window').height}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
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
  return {
    sessionCookie: state.Session.current,
    conversations: state.Conversations.conversations
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConversations: (sessionCookie) => dispatch(getConversations(sessionCookie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);