import { useNavigation, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function TicketBookingPage() {
  const navigation = useNavigation();
    const router = useRouter();
  const [selectedBlock, setSelectedBlock] = useState('VIP');
  const [selectedSeat, setSelectedSeat] = useState(19);

  const blocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'VIP'];
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  useEffect(() => {
    navigation.setOptions({
      title: 'Ticket',
    });
  }, []);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        {/* Match Info */}
        <View className="mb-4 items-center">
          <View className="my-4 flex-row items-center">
            <Image
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAP8A/wD/oL2nkwAABFFJREFUeJztmluoFVUYx3+mgqRdjD6kEEQwXEg3CsoKiwy6QJBhD0mchNCEXsLMB+lqFIHPEQUihQUSZEUIBlm+hBI+iMjx80giVHJ0FVkdO3o6XR5mxM0++8z61pqZPWfj/sGw95751nf5z8xas9bsaXQT548Ac4HZwCxgRn5kHDgHnAX+ROWGbqV0WWkPzt+J81dZrYF5wBwuFk/+fU5+bJEx7hU4vzQi047MCJtMCDwfeBJYAdyT710M/F42mUiuBfbhPMA+4DNgByo/xjixCeD8ImAd8AxwTQeLf2OCVkRrzLvybQvO/wZsA95H5VjISfEt4PxTOD8MHANepHPxU425wAZgCOdP4/zTRcahPmAN2X3ZqwjwbJFBSICx6nJpjMIayo8CPU5fgKYTaJq+AE0n0DR9AZpOoGkueQHiJ0PdwPk3gauB88CvwAngECqHW6wqmX9MTQHgpY57s5nfQeBj4OsqAk1VAYq4Nd8q4ZLvA7ojgPPLcf6/rsSKpH4BnF8P7Kk9TiL19gHObwS2tO1V4ChwEhjJ910JzAeWAAtrzamN+gRwfiVZ8YPAB8AXqAwZ2y4FVgHPUfNJqtP5I8A8VE5Ht1TZD+wHnsf5FcC7wHXVppdRXx+gsiap+Il+PkflemBt+aQm0jvDoMpW4HKyp8LK6B0BAFRGUVkI7K3KZW8uiqrcD3xrtC61KDoSON4kq4x2hTWEBPjFGMSO81XddrOMdoU1hIbBn41BJuL8bcBK4D6yycvslmMXvh0GvgO+RGVXcqxiCmsICXDcGOTic77zrwKbsJ2hG/NtXS7KdmAjKqeMcS0U1hC6HI8Yg/yF86/kE57N2C/PdgaAYZz/MLF9JwprmBZsbpvFnSO96Mn4B7gJlc4FOL8AyzOBSmGNlg7Jh00qLx5gOjCI8w+V8BH8z4JFgL0lEkhlJvA4sBXYjfMPJvoJPitYBNidGLydN4C/TZYq4/kcYG1+CR9MjBnM3SLAzsTgF9gFzETlNbIzG0/6pCqYe1gAlTPAT4kJPIHKo6iMJ7YvwylUgv2X9alsW0ICi1H5NKFdVZhytgrwTmTwJebVn/ow5WwTILuUDhkDD0w6dnePQVROWgxjJiabDTZ7UPkowmddWHIFYgRQ2QmMBqweM/urjzFUPrEax05NXyg4th2Vs5H+6mBDjHGcACrvMflV8HaUr3oYQyWqw05ZnBjosG90CnR8AKtjG8QLkI3t7cXWtZgRwxAqO2IbpS5PLW/7fSDRT5W052QiTQCVYeDllj0nkvxUx+uoJC3fpS9QqrxF9t4P4I9kP+U5iop53G+n7ArtLflnHQsiIabnnzeXcVJOgGyWdzewoJSfNEaAZaiUenkTXhOsEuu/RALreFXSW+8Ga6AvQNMJNE1fgKYTaJq+AE0n0DTdFuAbg81XtWfRQncFUHkAuB34ocPR48AdqDzc1Zwaw/llOP89zh/A+XubSuN/SGD4UrIpow4AAAAASUVORK5CYII=',
              }}
              className="h-12 w-12"
            />
            <Text className="mx-4 text-2xl font-bold">VS</Text>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Al_Nassr_FC_Logo.svg/1200px-Al_Nassr_FC_Logo.svg.png',
              }}
              className="h-12 w-12"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-700">March 30, 2025 | 20:30 PM</Text>
          <Text className="text-gray-500">Alawwal Park</Text>
        </View>

        {/* Stadium View Image */}
        <View className="my-4 w-full items-center">
          <Image
            source={require('../../assets/figma/ss.jpg')}
            className="h-64 w-full"
            resizeMode="contain"
          />
        </View>

        {/* Dashed Line */}
        <View className="my-4 border-t border-dashed border-gray-300" />

        {/* Block Selection */}
        <Text className="mb-2 text-lg font-semibold">Select a Block</Text>
        <View className="mb-4 flex-row flex-wrap">
          {blocks.map((block) => (
            <TouchableOpacity
              key={block}
              className={`m-1 rounded-full border px-4 py-2 ${selectedBlock === block ? 'bg-blue-500 ' : 'border-gray-300'}`}
              onPress={() => setSelectedBlock(block)}>
              <Text className={`text-sm ${selectedBlock === block ? 'text-white' : 'text-black'}`}>
                {block}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seat Selection */}
        <Text className="mb-2 text-lg font-semibold">Select a Seat in Block {selectedBlock}</Text>
        <View className="mb-4 flex-row flex-wrap">
          {seats.map((seat) => (
            <TouchableOpacity
              key={seat}
              className={`m-1 h-10 w-10 items-center justify-center rounded-full border ${selectedSeat === seat ? 'border-blue-700 bg-blue-600' : 'border-gray-300 bg-gray-100'}`}
              onPress={() => setSelectedSeat(seat)}>
              <Text className={`${selectedSeat === seat ? 'text-white' : 'text-black'}`}>
                {seat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="my-4 w-full flex-row items-center justify-around">
          <View className="flex-row items-center gap-2">
            <View className="h-6 w-6 rounded-full bg-gray-200" />
            <Text className="text-xs text-gray-500">Available</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="h-6 w-6 rounded-full bg-blue-200" />
            <Text className="text-xs text-gray-500">Reserved</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="h-6 w-6 rounded-full bg-blue-600" />
            <Text className="text-xs text-gray-500">Your selection</Text>
          </View>
        </View>

        {/* Ticket Info */}
        <View className="mb-6">
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-xl text-gray-500">Tickets</Text>
            <Text className="text-xl text-gray-500">1</Text>
          </View>
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-xl text-gray-500">Seats</Text>
            <Text className="text-xl text-gray-500">
              {selectedBlock} Row / {selectedSeat}
            </Text>
          </View>
        </View>
      </View>

      {/* Buy Button */}
      <View className="p-4">
        <TouchableOpacity className="items-center rounded-full bg-blue-400 py-4" onPress={() => router.push('/(matches)/PaymentScreen')}>
          <Text className="text-lg font-bold text-white">Buy Ticket for $20.00</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
