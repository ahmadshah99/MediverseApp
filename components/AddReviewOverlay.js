import React, { useState, useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Overlay, Icon, Rating, Input, Button} from 'react-native-elements';

const AddReviewOverlay = (props) => {
    const [visible, setVisible] = useState(props.visible)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    return (
        <Overlay
            isVisible={visible}
            onDismiss={props.handleClose}
            onShow={props.handleOpen}
            containerStyle={styles.main}
            fullScreen
        >
            <View style={styles.header}>
                <Text h2>Leave a review for Dr. {props.doctor.lastName}</Text>
                <Icon
                    name="close"
                    type="font-awesome"
                    size={20}
                    containerStyle={{ float: 'left' }}
                    onPress={() => setVisible(false)}
                />
            </View>
            <View style={styles.addReviewBody}>
                <Rating
                    showRating
                    style={{ paddingVertical: 10 }}
                />
                <Input
                    placeholder="Leave a review!"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles.commentInput}
                    onChangeText={value => this.setState({ comment: value })}
                />
                <Button title="Add Review"/>
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
        alignItems: 'center'
    },
    addReviewBody: {

    },
    commentInput: {

    }
});

export default AddReviewOverlay;
