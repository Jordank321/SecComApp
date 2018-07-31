import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text } from 'react-native';

const SIZE = 40;

class SettingsTab extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    //   componentDidMount = async () => {
    //     resetNavigation(this.props.navigation, 'messagesScreen');
    //   }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={{textAlign:'center'}}>Your conversations will go here</ Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4081'
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab);