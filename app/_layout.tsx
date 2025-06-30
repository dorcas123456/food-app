import { Stack } from 'expo-router';


export default function Rootlayout() {
     return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}  />
            <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
            <Stack.Screen name="auth/login" options={{ headerShown: false }} />
            <Stack.Screen name="/protected/home" options={{ headerShown: false }} />
        </Stack>
     )
}