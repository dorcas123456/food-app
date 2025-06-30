import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../reusables/input';

export default function Signupscreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = () => {
        router.push('/auth/login');
        router.push('/protected/home');
    }

    return(
        <SafeAreaView style={styles.body}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'android' ? 'padding' : 'height'}
              style={styles.keyboard}
              />

              <ScrollView>

               <SafeAreaView>
                <Text style={styles.firstT}>SIGN UP </Text>
               </SafeAreaView>

               <View>
                 <Input
                  label="Full Name"
                  placeholderTextColor="white"
                  placeholder="John Solomon"
                  value={fullName}
                  onChangeText={setFullName}
                  error={errors.fullName}
                  />

                  <Input 
                  label="Email"
                  placeholderTextColor='white'
                  placeholder="johnsolomon@gmail.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  error={errors.email}
                  />

                  <Input
                  label="Password"
                  placeholderTextColor="white"
                  placeholder="enter strong password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  error={errors.password}
                  />

                  <Input
                  label="Confirm Password"
                  placeholderTextColor="white"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  error={errors.confirmPassword}
                  />

                  <TouchableOpacity  onPress={() => router.push('/protected/home')} style={styles.sign}>
                    <Text style={styles.secondt}> Create Account </Text>  
                  </TouchableOpacity>    

                  <View  style={styles.view}>
                  <Text style={styles.thirdt}>Already have an account? </Text> 
                   <TouchableOpacity onPress={() => router.push('/auth/login')}>
                    <Text  style={styles.fourtht}>Login</Text>
                   </TouchableOpacity>
                  </View>            
               </View>
              </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   body: {
          height: Platform.select({ android: 800, ios: 220, default:240 }),
        paddingTop: Platform.OS === 'android' ? 40: 80,
        paddingHorizontal: 24,
        alignItems: 'center',
        backgroundColor: '#FFE5B4'
   },

   firstT: {
        color: 'white',
        fontSize: 40,
        fontWeight: '900',
        marginLeft: 90,
        marginBottom: 20
   },

   sign: {
    backgroundColor: '#7FFF00',
    width: 280,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 30
   },

   secondt: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
    padding: 6
   },

   thirdt: {
    marginLeft: 60,
    paddingTop: 10
   },

   view: {
    flexDirection: 'row',
    gap: 1
   },

   fourtht: {
    paddingTop: 10,
    fontWeight: '500'
   },

   keyboard: {
    flex: 1
   }
   
})