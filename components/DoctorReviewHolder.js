import {FlatList, ScrollView, StyleSheet, TouchableHighlight, View} from "react-native";
import {Icon, Text} from "react-native-elements";
import React, {useState} from "react";
import DoctorReview from "./DoctorReview";
import AddReviewOverlay from "./AddReviewOverlay";

const DoctorReviewHolder = (props) => {
    const [reviewsVisible, setReviewsVisible] = useState(false)

    const renderReviewers = ({ item }) => {
        return (
            <DoctorReview key={item.id} review={item} />
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
            <FlatList
                removeClippedSubviews
                data={props.reviewers}
                renderItem={renderReviewers}
            />
            <AddReviewOverlay
                visible={reviewsVisible}
                handleOpen={() => setReviewsVisible(true)}
                handleClose={() => setReviewsVisible(false)}
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
