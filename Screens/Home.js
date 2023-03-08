import React from 'react';
import { Text, View } from 'react-native';

export default function Home(){
    return (
        <View className="flex-1 bg-gray-100 justify-center items-center">
        <View className="p-6 bg-white rounded-lg shadow-md w-5/6">
            <Text className="text-2xl font-bold mb-4">Home</Text>
            <Text className="text-2xl font-bold mb-4">Welcome to your app!</Text>
            <Text className="text-2xl font-bold mb-4">You're logged in!</Text>
        </View>
        </View>
    );
}