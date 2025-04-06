import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const router = useRouter();

  const paymentMethods = [
    { id: 'apple', name: 'Apple Pay', logo: require('../../assets/payment/apple.jpg') },
    {
      id: 'card',
      name: 'Pay by Debit/ Credit Card',
      logo: require('../../assets/payment/mastercard.png'),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}

      {/* Payment Method Title */}
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-bold">Payment Method</Text>
        <TouchableOpacity>
          <Text className="font-semibold text-blue-300">Add New Card</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Options */}
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          onPress={() => setSelectedMethod(method.id)}
          className={`mb-4 flex-row items-center justify-between rounded-2xl border p-4 ${
            selectedMethod === method.id ? 'border-blue-400' : 'border-gray-300'
          }`}>
          <View className="flex-row items-center space-x-4">
            <Image source={method.logo} className="h-6 w-6" resizeMode="contain" />
            <Text className="text-base">{method.name}</Text>
          </View>

          <View
            className={`h-5 w-5 rounded-full border-2 ${
              selectedMethod === method.id ? 'border-blue-400 bg-blue-400' : 'border-gray-300'
            } items-center justify-center`}>
            {selectedMethod === method.id && <View className="h-2 w-2 rounded-full bg-white" />}
          </View>
        </TouchableOpacity>
      ))}

      {/* Card Details (only if Debit/Credit Card selected) */}
      {selectedMethod === 'card' && (
        <View className="mb-6 flex-row items-center space-x-4 rounded-2xl border border-blue-400 p-4">
          <Image
            source={require('../../assets/payment/mastercard.png')}
            className="h-6 w-10"
            resizeMode="contain"
          />
          <Text className="text-lg font-semibold tracking-widest">•••• •••• •••• 0231</Text>
        </View>
      )}

      {/* Add Voucher */}
      <Text className="mb-2 text-lg font-bold">Add Voucher</Text>
      <View className="mb-6 flex-row items-center overflow-hidden rounded-2xl border border-gray-300">
        <TextInput placeholder="VOUCHER CODE" className="flex-1 p-4" />
        <TouchableOpacity className="bg-blue-400 p-4">
          <Text className="font-bold text-white">APPLY</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        className="items-center rounded-2xl bg-blue-400 p-4"
        onPress={() => router.push('/(matches)/SuccessPage')}>
        <Text className="text-lg font-bold text-white">CHECKOUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
