import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Avatar, Rating} from 'react-native-elements';
import {getUserById} from "../api/User";

const DoctorReview = (props) => {
    const thumbnails = {
        'dylan'  : require('../assets/images/reviews/dylan.png'),
        'beth'    : require('../assets/images/reviews/beth.png'),
        'ethan'    : require('../assets/images/reviews/ethan.png'),
    }

    const [author, setAuthor] = useState({
        firstName: '',
        lastName: '',
        createdAt: '',
        country: ''
    })

    useEffect(() => {
        console.debug(props.review)
        // gets the review author
        getUserById(props.review.userId).then(res => {
            setAuthor(res.data)
            console.debug(res.data)
        // TODO: Error handling
        }).catch(err => {
            console.debug(err)
        })
    }, [])

    return (
        <View style={styles.reviewCard}>
                <View style={styles.reviewPosterInfo}>
                    <Avatar
                        size="large"
                        rounded
                        source={thumbnails['ethan']}
                        containerStyle={{ marginRight: 10 }}
                    />
                    <View style={styles.reviewSubtextHolder}>
                        <View style={styles.reviewSubtextLeft}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                {author.firstName} {author.lastName}
                            </Text>
                            <Text>{author.country}</Text>
                        </View>
                        <View style={styles.reviewSubtextRight}>
                            <Text>
                                { author.createdAt.substring(0, 10) }
                            </Text>
                            <Rating
                                tintColor="#f4f4f4"
                                type="custom"
                                ratingColor="#53D8C7"
                                ratingBackgroundColor="#CAC7C7"
                                imageSize={20}
                                readonly
                                startingValue={props.review.rating}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.reviewContent}>
                    <Text>
                        {props.review.description}
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
    },
    reviewSubtextHolder: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    reviewSubtextLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    reviewSubtextRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})

export default DoctorReview;
