import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodDetails() {
    return (
        <View style={styles.view}>
            <Text>food type screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
})