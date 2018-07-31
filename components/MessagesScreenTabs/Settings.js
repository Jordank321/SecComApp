import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import imgBackArrow from '../../images/left-arrow.png';
import { deleteSession } from '../../redux/Session';
import { Actions, ActionConst } from 'react-native-router-flux';

const SIZE = 40;

class SettingsTab extends Component {
    constructor() {
        super();

        this.state = {
        };

        this.logoutPress = this.logoutPress.bind(this);
    };

    async logoutPress(){
        await this.props.deleteSession()
        Actions.loginScreen({type: ActionConst.REPLACE})
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign:'center'}}>Some settings will go here</ Text>
                <TouchableOpacity onPress={this.logoutPress} style={styles.button}>
                <Image
                    source={imgBackArrow}
                />
                </TouchableOpacity>
            </View>
        );
    };
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
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSession: async () => dispatch(await deleteSession())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab);