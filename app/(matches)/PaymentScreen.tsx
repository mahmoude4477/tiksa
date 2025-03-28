import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function PaymentScreen() {
  const { matchId, seat, block } = useLocalSearchParams();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (cardNumber.length < 16 || expiry.length < 5 || cvv.length < 3) {
      Alert.alert('Payment Error', 'Please enter valid card details.');
      return;
    }

    // Simulate Payment Process
    setTimeout(() => {
      Alert.alert('Payment Successful', 'Your ticket has been booked!', [
        // { text: 'OK', onPress: () => router.push('/(matches)/confirmation') },
      ]);
    }, 2000);
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-center text-2xl font-bold">Payment</Text>
      <Text className="mt-2 text-center text-gray-600">
        Match ID: {matchId} | Block: {block} | Seat: {seat}
      </Text>

      {/* Card Input */}
      <Text className="mt-6 text-lg font-bold">Enter Card Details:</Text>
      <TextInput
        placeholder="Card Number"
        keyboardType="numeric"
        maxLength={16}
        className="mt-2 rounded border border-gray-300 p-2"
        onChangeText={setCardNumber}
      />
      <TextInput
        placeholder="Expiry (MM/YY)"
        maxLength={5}
        className="mt-2 rounded border border-gray-300 p-2"
        onChangeText={setExpiry}
      />
      <TextInput
        placeholder="CVV"
        keyboardType="numeric"
        maxLength={3}
        className="mt-2 rounded border border-gray-300 p-2"
        secureTextEntry
        onChangeText={setCvv}
      />
      {/* Pay Button */}
      <TouchableOpacity
        className="mt-6 w-full rounded-lg bg-green-600 p-4 shadow-md"
        onPress={handlePayment}>
        <Text className="text-center font-bold text-white">Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}
