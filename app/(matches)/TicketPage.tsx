import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useRoute, RouteProp } from '@react-navigation/native';
type TicketPageRouteParams = {
  block: string;
  seat: number;
};
export default function TicketPage() {
  const [showVerification, setShowVerification] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // Optional: Receive ticket info if you send from previous page
  const route = useRoute<RouteProp<{ params: TicketPageRouteParams }, 'params'>>();

  const { block = 'VIP', seat = 19 } = route.params || {};

  const handleShowQRCode = () => {
    setShowVerification(true);

    setTimeout(() => {
      setShowVerification(false);
      setShowQRCode(true);

      const id = setTimeout(() => {
        setShowQRCode(false);
      }, 60000); // Hide after 1 min
      setTimerId(id);
    }, 2000); // Wait for verification
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <View className="flex-1 bg-white p-6">
      {/* Ticket Information */}
      <View className="mb-6 rounded-2xl border border-gray-300 p-6 shadow-md">
        {/* Match Teams */}
        <View className="mb-4 flex-row items-center justify-center">
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

        {/* Match Details */}
        <View className="mb-4 items-center">
          <Text className="text-lg font-bold text-gray-800">Al Hilal vs Al Nassr</Text>
          <Text className="text-gray-500">March 30, 2025 | 20:30 PM</Text>
          <Text className="text-gray-400">Alawwal Park</Text>
        </View>

        {/* Seat Info */}
        <View className="mt-4 flex-row justify-between">
          <View className="flex items-center">
            <Text className="text-gray-400">Block</Text>
            <Text className="font-bold text-gray-800">{block}</Text>
          </View>
          <View className="flex items-center">
            <Text className="text-gray-400">Seat</Text>
            <Text className="font-bold text-gray-800">{seat}</Text>
          </View>
          <View className="flex items-center">
            <Text className="text-gray-400">Ticket No</Text>
            <Text className="font-bold text-gray-800">#123456</Text>
          </View>
        </View>
      </View>

      {/* QR Code Section */}
      <View className="flex-1 items-center justify-center">
        {!showQRCode && !showVerification && (
          <TouchableOpacity
            onPress={handleShowQRCode}
            className="w-full items-center rounded-2xl bg-blue-400 p-4">
            <Text className="text-lg font-bold text-white">SHOW QR CODE</Text>
          </TouchableOpacity>
        )}

        {showVerification && (
          <Text className="text-xl font-semibold text-gray-500">Wait for verification...</Text>
        )}

        {showQRCode && (
          <View className="items-center">
            <QRCode value={`https://your-website.com/ticket/${block}-${seat}`} size={200} />
            <Text className="mt-4 text-gray-400">QR code will hide after 1 minute</Text>
          </View>
        )}
      </View>
    </View>
  );
}
