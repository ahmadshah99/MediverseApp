import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

const DoctorInfoTile = (props) => {
    const tileContent = props.tileContent.map((tileContentItem, index) => {
        return (
            <View key={index} style={styles.doctorInfoCardItems}>
                <Text style={styles.infoTitle}>
                    { tileContentItem.title }
                </Text>
                <Text style={styles.infoText}>
                    { tileContentItem.content }
                </Text>
            </View>
        )
    })
    const tileTile = props.tileTitle ? <Text h1 style={{ marginBottom: 10 }}>{ props.tileTitle }</Text> : <View />
    return (
        <View style={styles.doctorInfoCard}>
            { tileTile }
            { tileContent }
        </View>
    )
};

const styles = StyleSheet.create({
    infoTitle: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 24
    },
    infoText: {
        fontStyle: 'italic',
        fontSize: 20
    },
    doctorInfoCard: {
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#53D8C7',
        minHeight: 300,
        width: '100%',
        borderRadius: 20,
        padding: 40,
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
    },
    doctorInfoCardItems: {
        flex: 1,
        marginBottom: 10
    }
})

export default DoctorInfoTile;
