import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

const DoctorInfoTile = (props) => {
    const tileContent = props.titleContent.forEach(tileContentItem => {
        return (
            <View style={styles.doctorInfoCardItems}>
                <Text style={styles.infoTitle}>
                    { tileContentItem.title }
                </Text>
                <Text style={styles.infoText}>
                    { tileContentItem.content }
                </Text>
            </View>
        )
    })
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10
    },
    doctorClinicInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    doctorProfileMainInformation: {
        alignItems: 'center',
        marginTop: 30
    },
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
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 40,
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    doctorInfoCardItems: {


    }
})

export default DoctorInfoTile;
