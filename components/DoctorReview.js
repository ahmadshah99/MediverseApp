import React from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList} from 'react-native';
import {Text, Avatar, Icon, Rating} from 'react-native-elements';

const DoctorReview = (props) => {
    const thumbnails = {
        'dylan'  : require('../assets/images/reviews/dylan.png'),
        'beth'    : require('../assets/images/reviews/beth.png'),
        'ethan'    : require('../assets/images/reviews/ethan.png'),
    }

    return (
        <View style={styles.reviewCard}>
                <View style={styles.reviewPosterInfo}>
                    <Avatar
                        size="large"
                        rounded
                        containerStyle={{ marginLeft: 10, marginTop: 10}}
                        source={thumbnails[props.review.imageId]}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Text h3> {props.review.name} </Text>
                        <Text>{props.review.location}</Text>
                        <Rating
                            tintColor="#f4f4f4"
                            imageSize={20}
                            readonly
                            startingValue={props.review.rating}
                        />
                    </View>
                </View>
                <View style={styles.reviewContent}>
                    <Text>
                        {props.review.content}
                    </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewCard: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        padding: 10,
        marginTop: 15
    },
    reviewPosterInfo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    reviewContent: {
        marginTop: 15
    }
})

export default DoctorReview;
