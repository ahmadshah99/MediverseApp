import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

const DoctorProfile = ({route}) => {
    const firstTileContent = [
        {
            title: 'Speciality',
            content: route.params.item.role
        },
        {
            title: 'Location of Practice',
            content: 'Marrakesh, Morocco',
        },
        {
            title: 'Languages Spoken',
            content: routes.params.item.language
        }
    ]
    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <Text h3 style={{ fontWeight: 'bold' }}>Dr. { route.params.item.name }</Text>
            <View style={styles.doctorClinicInfo}>
                <Avatar
                    size="xlarge"
                    rounded
                    containerStyle={{ marginLeft: 10, marginTop: 10}}
                    source={require('../assets/images/doctor.png')}
                />
                <View style={{ margin: 20, marginTop: 30 }}>
                    <Text h4>Marrakech Clinics</Text>
                    <Text style={{fontStyle: 'italic'}}>Derb Sidi Messaoud 40</Text>
                    <Text style={{fontStyle: 'italic'}}>Marrakesh, Morocco</Text>
                </View>
            </View>
            <View style={styles.doctorProfileMainInformation}>
                <View style={styles.doctorInfoCard}>
                    <View style={styles.doctorInfoCardItems}>
                        <Text style={styles.infoTitle}>
                            Speciality
                        </Text>
                        <Text style={styles.infoText}>
                            { route.params.item.role }
                        </Text>
                    </View>
                    <View style={styles.doctorInfoCardItems}>
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
            </View>
        </ScrollView>
    )
}

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

export default DoctorProfile;
