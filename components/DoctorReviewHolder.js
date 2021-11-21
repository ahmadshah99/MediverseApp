import {FlatList, ScrollView, StyleSheet, TouchableHighlight, View} from "react-native";
import {Icon, Text} from "react-native-elements";
import React, {useEffect, useState} from "react";
import DoctorReview from "./DoctorReview";
import AddReviewOverlay from "./AddReviewOverlay";
import {getDoctorsByReview} from "../api/DoctorReview";

const DoctorReviewHolder = (props) => {
    const [reviews, setReviews] = useState([])
    const [reviewsVisible, setReviewsVisible] = useState(false)

    useEffect(() => {
        getDoctorsByReview(props.doctor._id, 'highestRating').then(res => {
            setReviews(res.data)
        })
    }, [])

    const handleClose = () => {
        setReviewsVisible(false)
        // refresh the reviews when we close the overlay
        getDoctorsByReview(props.doctor._id, 'highestRating').then(res => {
            setReviews(res.data)
        })
    }

    const renderReviews = ({ item }) => {
        return (
            <DoctorReview key={item._id} review={item} />
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.reviewSection}>
            <View style={styles.reviewSectionHeader}>
                <Text h1 gutterBottom>Reviews</Text>
                <Icon name='edit'
                      type='font-awesome'
                      size={30}
                      onPress={() => setReviewsVisible(true)}
                />
            </View>
            <View>
                { reviews.length === 0 &&
                    <Text>
                        No reviews yet. Leave a review!
                    </Text>
                }
            </View>
            <FlatList
                removeClippedSubviews
                data={reviews}
                renderItem={renderReviews}
            />
            <AddReviewOverlay
                visible={reviewsVisible}
                handleOpen={() => setReviewsVisible(true)}
                handleClose={handleClose}
                doctor={props.doctor}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    reviewSection: {
        marginTop: 20
    },
    reviewSectionHeader: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default DoctorReviewHolder;
