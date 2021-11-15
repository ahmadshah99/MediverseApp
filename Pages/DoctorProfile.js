import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList, TouchableHighlight} from 'react-native';
import {Text, Avatar, Icon, Rating} from 'react-native-elements';

import DoctorInfoTile from "../components/atoms/DoctorInfoTile";
import DoctorReview from "../components/DoctorReview";
import DoctorCard from "../components/DoctorCard";

const DoctorProfile = ({route}) => {
    const firstTileContent = [
        {
            title: 'Speciality',
            content: route.params.item.expertise[0]
        },
        {
            title: 'Location of Practice',
            content: `${ route.params.item.address.city }, ${ route.params.item.address.country }`,
        },
        {
            title: 'Languages Spoken',
            content: route.params.item.languages[0]
        }
    ]
    const secondTileContent = [
        {
            title: 'Insurance Accepted',
            content:
                <View>
                    <Text style={styles.infoText}>Cigna</Text>
                    <Text style={styles.infoText}><Icon name='check' type='font-awesome' color='#53D8C7'/>Your insurance is accepted here</Text>
                </View>
        },
        {
            title: 'Payment Plan',
            content:
                <View>
                    <Text style={styles.infoText}><Icon name='check' type='font-awesome' color='#53D8C7'/>Flexible payment plan</Text>
                    <Text style={styles.infoText}><Icon name='check' type='font-awesome' color='#53D8C7'/>Discounts for non-insurance holders</Text>
                </View>
        }
    ]
    const reviewers = [
        {
            id: 0,
            name: 'Dylan',
            location: 'Los Angeles, CA',
            rating: 5,
            content: 'Dr. Gould was very sympathetic! She really was super helpful in helping me understand my payment plan too.',
            imageId: 'dylan'
        },
        {
            id: 1,
            name: 'Beth',
            location: 'Bangor, ME',
            rating: 4,
            content: 'Dr. Gould was great! Only issue was the wait times.',
            imageId: 'beth'
        },
        {
            id: 2,
            name: 'Ethan',
            location: 'Toronto, ON',
            rating: 5,
            content: 'Enjoyed my time there (the care not the illness).',
            imageId: 'ethan'
        }
    ]
    const renderReviewers = ({ item }) => {
        return (
            <DoctorReview key={item.id} review={item} />
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <Text h3 style={{ fontWeight: 'bold' }}>Dr. { route.params.item.firstName } { route.params.item.lastName }</Text>
            <View style={styles.doctorClinicInfo}>
                <Avatar
                    size="xlarge"
                    rounded
                    containerStyle={{ marginLeft: 10, marginTop: 10}}
                    source={require('../assets/images/doctor.png')}
                />
                <View style={{ margin: 20, marginTop: 30 }}>
                    <Text h4>{ route.params.item.clinicName }</Text>
                    <Text style={{fontStyle: 'italic'}}>{ route.params.item.address.streetAddress }</Text>
                    <Text style={{fontStyle: 'italic'}}>{ route.params.item.address.city }, { route.params.item.address.country }</Text>
                    <View style={styles.doctorActions}>
                        <Icon name='heart' style={{ marginRight: 20 }} type='font-awesome' size={40} color='#53D8C7'/>
                        <Icon name='calendar' type='font-awesome' size={40} color='#53D8C7'/>
                    </View>
                </View>
            </View>
            <ScrollView>
                <ScrollView contentContainerStyle={styles.doctorProfileMainInformation}>
                    <DoctorInfoTile tileContent={firstTileContent} />
                    <DoctorInfoTile tileContent={secondTileContent} tileTitle="Insurance & Payout" />
                </ScrollView>
                <ScrollView contentContainerStyle={styles.reviewSection}>
                    <Text h1>Reviews</Text>
                    <FlatList
                        removeClippedSubviews
                        data={reviewers}
                        renderItem={renderReviewers}
                    />
                </ScrollView>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 20
    },
    doctorClinicInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    doctorProfileMainInformation: {
        alignItems: 'center',
        marginTop: 30,
        flexGrow: 1
    },
    infoTitle: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 24
    },
    infoText: {
        fontStyle: 'italic',
        fontSize: 20,
        marginTop: 10
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
    doctorActions: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    reviewSection: {
        marginTop: 20
    }
})

export default DoctorProfile;
