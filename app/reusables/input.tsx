import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface InputProps {
    label: string;
    placeholderTextColor: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    placeholderTextColor,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType= 'default',
    error 
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    return (
        <View style={styles.sign}>
   
            <View>
                <TextInput style={styles.form} value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
            />

                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <MaterialIcons
                        name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                        size={20}
                        color="black"
                        marginLeft={270}
                        position="absolute"
                        />
                    </TouchableOpacity>
                )}
            

                {value.length > 0 && !secureTextEntry && (
                    <MaterialIcons name="check" size={20} color="black" />
                )}
            </View>

            {error? <Text style={{ color: 'black', fontSize: 50, marginTop: 30}}> {error} </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        fontWeight: 400,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 60,
        width: 280,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },

    sign: {
        marginBottom: 40,
        color: 'white'
    }
});