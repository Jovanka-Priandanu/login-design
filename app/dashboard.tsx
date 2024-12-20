// File: dashboard.tsx
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    React.useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        };
        fetchUser();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            {user ? (
                <View>
                    <Text style={styles.info}>Welcome, {user.name}!</Text>
                    <Text style={styles.info}>Email: {user.email}</Text>
                </View>
            ) : (
                <Text style={styles.info}>Loading user information...</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    info: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default DashboardScreen;
