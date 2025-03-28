import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Add your sign-in logic here
    // After successful sign-in:
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient colors={['#FAFFFE', '#FAFFFE']} className="flex-1 justify-center px-8">
      <View className="mb-8 items-center">
        <Text className="text-4xl font-bold text-blue-600">TickSA</Text>
      </View>

      <Text className="mb-1 text-gray-600">Email</Text>
      <TextInput
        className="mb-4 rounded-lg border border-gray-300 px-4 py-3"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text className="mb-1 text-gray-600">Password</Text>
      <View className="mb-4 flex-row items-center rounded-lg border border-gray-300 px-4">
        <TextInput
          className="flex-1 py-3"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="mb-40 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          className="flex-row items-center">
          <Checkbox value={rememberMe} onValueChange={setRememberMe} />
          <Text className="ml-2 text-gray-600">Remember me</Text>
        </TouchableOpacity>
        <Text className="text-blue-600">Forgot password</Text>
      </View>

      <TouchableOpacity className="mb-4 items-center rounded-3xl border border-blue-500 py-5">
        <Text className="text-blue-500">Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mb-6 items-center rounded-3xl bg-blue-600 py-5"
        onPress={handleSignIn}>
        <Text className="font-bold text-white">Sign In</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center gap-6">
        <FontAwesome name="instagram" size={30} color="#287B8C" />
        <FontAwesome name="google" size={30} color="#287B8C" />
        <FontAwesome name="facebook" size={30} color="#287B8C" />
      </View>
    </LinearGradient>
  );
}
