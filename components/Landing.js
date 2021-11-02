import React from 'React';
import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-elements';

const Landing = () => {
    return (
        <View>
            <Text h1 style={styles.titleText}>All you need medical travel companion</Text>
        </View>
    )
};

export default Landing;

const styles = StyleSheet.create({
    titleText: {
        color: '#035762',
        fontFamily: 'OpenSans-Regular'
    },
});
