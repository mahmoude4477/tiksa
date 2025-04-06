import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1  bg-white p-4">
      <View className="h-screen items-center justify-center gap-32">
        {/* Check Icon */}
        <View className="flex flex-col items-center gap-3">
          <Image
            source={require('../../assets/figma/check.png')}
            className="mb-8 h-32 w-32"
            resizeMode="contain"
          />

          {/* Title */}
          <Text className="text-3xl font-bold">Success!</Text>

          {/* Subtitle */}
          <Text className="text-center text-gray-500">You successfully made a payment</Text>
          <Text className="text-center text-gray-500">enjoy service!</Text>
        </View>
        <View className="w-full flex-col items-center gap-4">
          {/* Show Ticket Button */}
          <TouchableOpacity
            className="w-full items-center rounded-2xl bg-blue-400 p-4"
            onPress={() => router.navigate('/(matches)/TicketPage')}>
            <Text className="text-lg font-bold text-white">SHOW TICKET</Text>
          </TouchableOpacity>

          {/* Continue Button */}
          <TouchableOpacity
            className="w-full items-center rounded-2xl border-2 border-blue-400 p-4"
            onPress={() => router.navigate('/(tabs)')}>
            <Text className="text-lg font-bold text-blue-400">CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
