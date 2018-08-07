import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { CardList } from '../CardList/CardList';

import logoImg from '../../images/owl.png';

const SIZE = 40;

class SettingsTab extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    cards = [
        {
            id: "0",
            title: "Starry Night",
            picture: logoImg,
            content: <Text>Starry Night</Text>
        },
        {
            id: "1",
            title: "Wheat Field",
            picture: logoImg,
            content: <Text>Wheat Field with Cypresses</Text>
        },
        {
            id: "2",
            title: "Bedroom in Arles",
            picture: logoImg,
            content: <Text>Bedroom in Arles</Text>
        }
    ];

    render() {
        let cards = this.props.conversations 
            ? this.props.conversations.map(convo => {return {
                id: convo.id.toString(),
                title: `${convo.firstUser} and ${convo.secondUser}`,
                picture: logoImg,
                content: <Text>MESSAGES HERE</Text>
            }})
            : []

        return (
            <ScrollView style={styles.container}>
                <CardList cards={cards}/>
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
    return {
      conversations: state.Conversations.conversations
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab);