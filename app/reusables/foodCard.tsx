import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Food } from '../utils/types';

interface FoodProps {
    food: Food;
    onPress: () => void;
}

export default function FoodCard({food, onPress}: FoodProps) {
    return (
        <View style={styles.first}>
           <TouchableOpacity onPress={onPress} style={styles.second} >
               <Image
               source={{ uri: food.image }}
               style={styles.image}
               resizeMode="cover"
               />

               <Text style={styles.title}>{food.title}</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
        first: {
            marginBottom: 10
        },

        second: {
            marginBottom: 5
        },

        image:{
            width: 370,
            height: 300,
            marginLeft: 7,
            marginTop: 10,
            borderRadius: 10
        },

        title: {
            color: 'black',
            fontSize: 15,
            fontWeight: '700',
            marginTop: 2,
            marginLeft: 7
        }
})