import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Icon, Text} from 'react-native-elements';

const DoctorCard = (props) => {
    console.log(props.doctor)

    return (
        <Card style={styles.doctorCard}>
            <View>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require('../assets/images/doctor.png')}
                />
            </View>
            <Card.Divider/>
            <View style={styles.doctorCardContent}>
                <Card.Title style={styles.titleStyle}>{ props.doctor.firstName } {props.doctor.lastName }</Card.Title>
                <View style={styles.reviewHolder}>
                    <Text h3 style={{ marginBottom: 2}}>5</Text>
                    <Icon  name="star" type="antdesign" size={32} color="#53D8C7" />
                </View>
            </View>
            <Text h4>{ props.doctor.expertise[0] }</Text>
            <Text h5 style={{ fontStyle: 'italic' }}>
                <Icon style={{ marginTop: 5 }} name="location-pin" type="entypo" />
                { props.doctor.distance }km away from your hotel</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    doctorCard: {
        flex: 1,
        marginBottom: 5
    },
    image: {
        height: 300,
        width: 300,
    },
    titleStyle: {
        fontSize: 28,
        textAlign: 'left',
        alignSelf: 'flex-start'
    },
    role: {
        fontSize: 22,
        top: 100
    },
    doctorCardContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    reviewHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    }
});

export default DoctorCard;
