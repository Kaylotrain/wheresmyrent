import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Send login request to backend
    // If successful, navigate to Home screen
    // Otherwise, display error message
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <View className="p-6 bg-white rounded-lg shadow-md w-5/6">
        <Text className="text-2xl font-bold mb-4">Login</Text>
        <TextInput
          className="border border-gray-300 p-2 mb-4 w-full rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          className="border border-gray-300 p-2 mb-4 w-full rounded-md"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-blue-500 py-2 px-4 rounded-md"
          onPress={handleLogin}
        >
          <Text className="text-white font-bold text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="mt-4"
          onPress={() => navigation.navigate('Signup')}
        >
          <Text className="text-blue-500 font-semibold text-center">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;