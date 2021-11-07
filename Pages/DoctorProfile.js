import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

const DoctorProfile = ({route}) => {
    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <Text h3><strong>Dr. { route.params.item.name }</strong></Text>
            <View style={styles.doctorClinicInfo}>
                <Avatar
                    size="large"
                    rounded
                    containerStyle={{ marginLeft: 10, marginTop: 10}}
                    source={require('../assets/images/doctor.png')}
                />
                <View style={{ margin: 20, marginTop: 15}}>
                    <Text h5>Marrakech Clinics</Text>
                    <Text><em>Derb Sidi Messaoud 40</em></Text>
                    <Text><em>Marrakesh, Morocco</em></Text>
                </View>
            </View>
            <View styles={styles.doctorInfoCard}>
                <View styles={styles.doctorInfoCardItems}>
                    <Text style={styles.infoTitle}>
                        Speciality
                    </Text>
                    <Text style={styles.infoText}>
                        { route.params.item.role }
                    </Text>
                </View>
                <View styles={styles.doctorInfoCardItems}>
                    <Text style={styles.infoTitle}>
                        Location of practice
                    </Text>
                    <Text style={styles.infoText}>
                        Marrakesh, Morroco
                    </Text>
                </View>
                <View styles={styles.doctorInfoCardItems}>
                    <Text style={styles.infoTitle}>
                        Language spoken
                    </Text>
                    <Text style={styles.infoText}>
                        { route.params.item.language.toUpperCase() }
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    doctorClinicInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    infoTitle: {
        fontWeight: 'bold'
    },
    infoText: {
        fontStyle: 'italic'
    },
    doctorInfoCard: {
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#53D8C7',
        minHeight: 200,
        boxSizing: 'border-box',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    doctorInfoCardItems: {

    }
})

export default DoctorProfile;
