import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';

const CardButton = (props) => {
    const rightArrow = <Icon name='arrowright' type='antdesign' color='#53D8C7'/>;

    return (
        <Card containerStyle={styles.cardButton}>
            <View style={styles.titleStringHolder}>
                { rightArrow }
                <Text style={styles.titleString}>{ props.title.toUpperCase() }</Text>
            </View>
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
        justifyContent: 'center',
        borderRadius: 20
    },
    titleStringHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    titleString: {
        color: '#53D8C7',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    }
});
