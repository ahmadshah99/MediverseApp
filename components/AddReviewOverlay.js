import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Text, Overlay, Icon, Rating, Input, Button, Avatar} from 'react-native-elements';
import {createDoctorReview} from "../api/DoctorReview";

const AddReviewOverlay = (props) => {
    const MOCK_USER_ID = '619a1647d104dbc9413f0188'
    const [visible, setVisible] = useState(props.visible)
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(3)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    const submitReview = () => {
        const reviewBody = {
            doctorId: props.doctor._id,
            userId: MOCK_USER_ID,
            rating: rating,
            description: comment,
            tags: []
        }

        createDoctorReview(reviewBody).then(res => {
            console.debug(res)
            Alert.alert(
                'Review submitted',
                'Thank you for your review!',
                [{ text: "Back", onPress: () => props.handleClose }]
            )
        }).catch(err => {
            Alert.alert(
                'Something went wrong!',
                'Could not submit review. Check your internet connection or try again later.',
                [{ text: "Back", onPress: () => props.handleClose }]
            )
        })
    }


    return (
        <Overlay
            isVisible={visible}
            onDismiss={props.handleClose}
            onShow={props.handleOpen}
            containerStyle={styles.main}
        >
            <Icon
                name="close"
                type="font-awesome"
                containerStyle={{ alignSelf: 'flex-end' }}
                onPress={() => setVisible(false)}
            />
            <View style={styles.header}>
                <Text h3>Leave a review for Dr. {props.doctor.lastName}</Text>
            </View>
            <View style={styles.addReviewBody}>
                <View style={styles.starRatingAndAvatar}>
                    <View>
                        <Text h4>Star Review</Text>
                        <Text>Select the number of stars</Text>
                        <Rating
                            defaultRating={4}
                            fractions={2}
                            imageSize={30}
                            minValue={1}
                            onFinishRating={rating => setRating(rating)}
                            style={{ paddingVertical: 10 }}
                        />
                    </View>
                    <View style={styles.avatarPortion}>
                        <Avatar
                            size="large"
                            rounded
                            containerStyle={{ marginLeft: 5, marginRight: 5, marginTop: 10}}
                            source={require('../assets/images/doctor.png')}
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>
                                { props.doctor.firstName } { props.doctor.lastName }
                            </Text>
                            <Text>
                                { props.doctor.address.city },
                            </Text>
                            <Text>
                                { props.doctor.address.country }
                            </Text>
                        </View>
                    </View>
                </View>
                <View styles={styles.writtenReview}>
                    <Text h4>Written Review</Text>
                    <Text>Explain the reason for your review</Text>
                    <Input
                        placeholder="Leave a review!"
                        leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        onChangeText={value => setComment(value)}
                        numberOfLines={5}
                        inputStyle={styles.reviewTextInput}
                        multiline
                    />
                </View>
                <Button
                    title="Submit Review"
                    buttonStyle={styles.submitReviewButton}
                    color="#53D8C7"
                    onPress={submitReview}
                />
            </View>
        </Overlay>
    )
};

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    addReviewBody: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    avatarPortion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    reviewTextInput: {
        padding: 5,
        margin: 5
    },
    starRatingAndAvatar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    writtenReview: {
        marginTop: 30
    },
    submitReviewButton: {
        backgroundColor: '#035762'
    }
});

export default AddReviewOverlay;
