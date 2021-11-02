import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Card} from 'react-native-elements';

const CardButton = (props) => {
    return (
        <Card containerStyle={styles.cardButton}>
            <Card.Title style={{ color: '#fff' }}>{ props.title }</Card.Title>
            { props.icon }
        </Card>
    )
};

export default CardButton;

const styles = StyleSheet.create({
    cardButton: {
        width: '85%',
        height: 200,
        backgroundColor: '#035762',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
