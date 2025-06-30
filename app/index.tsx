import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcomescreen () {
    const router = useRouter();
     
    const handleSubmit = () => {
        router.push('/auth/signup');
    }
    return (
           <>
           <View style={styles.body}>
            <Text style={styles.first}>WELCOME TO</Text>
            <Text  style={styles.second} >INSTANT FOODS</Text>
            <TouchableOpacity onPress={() => router.push('/auth/signup')} style={styles.button}>
            <Text  style={styles.third}>GET STARTED</Text>
            </TouchableOpacity>
           </View>
           </>
    );
}

const styles = StyleSheet.create({
    body : {
         height: Platform.select({ android: 800, ios: 220, default:240 }),
        paddingTop: Platform.OS === 'android' ? 60 : 80,
        paddingHorizontal: 24,
        paddingBottom: 40,
        alignItems: 'center',
        backgroundColor: '#FFE5B4'
    },

    first : {
        paddingTop: 280,
        color: 'black',
        fontSize: 40,
        fontWeight: '900',
    },

    second : {
        paddingTop: 2,
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        fontStyle: 'italic' 
    },

    button : {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        width: 220,
        marginTop: 270,
        backgroundColor: '#7FFF00'
    },

    third: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        paddingTop: 9
    }
})