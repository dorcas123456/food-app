import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useSegments, Slot, Stack } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ProtectedLayout() {
    const router = useRouter();
    const segments = useSegments();

    const navItems = [
        {
            label: 'Home',
            icon: <AntDesign name="home" size={24} color="black" />,
            route: '/protected/home',
        },
        {
            label: 'Profile',
            icon: <AntDesign name="user" size={24} color="black" />,
            route: '/proteted/profile'
        },
        {
            label: 'settings',
            icon: <AntDesign name="setting" size={24} color="black" />,
            route: '/protected/settings'
        },
        {
            label: 'foodDetails',
            icon: <AntDesign name="menu-fold" size={24} color="black" />,
            route: 'protected/foodDetails'
        }
    ];

    return(
        <>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.view}>
            <Slot />
        </View>

        <View  style={styles.viewone}>
           {navItems.map((item, index) => {
            const isActive = segments[0] === item.route.split('/').pop();
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.touch}
                    onPress={() => router.push(item.route)}>
                        <View  style={styles.viewtwo}>
                            {item.icon}
                            <Text  style={styles.text}>
                                {isActive ? '.' : item.label}
                            </Text>
                        </View>
                </TouchableOpacity>
            )
           })}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    
    viewone: {
        height: 32,
        flexDirection : 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'blue'
    },

    touch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewtwo: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        marginTop: 1,
        fontSize: 8,
        fontWeight: 200,
        color: 'pink'
    }
})