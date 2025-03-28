import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      title: 'Roshn Saudi League',
      image: require('../../assets/figma/rsl.png'),
      matches: [
        {
          id: 'match1',
          team1: { name: 'Al-Nassr', logo: require('../../assets/figma/rsl.png') },
          team2: { name: 'Al-Hilal', logo: require('../../assets/figma/rsl.png') },
          date: 'March 30, 2025',
          time: '20:30 KSA',
        },
        {
          id: 'match2',
          team1: { name: 'Al-Ittihad', logo: require('../../assets/figma/rsl.png') },
          team2: { name: 'Al-Shabab', logo: require('../../assets/figma/rsl.png') },
          date: 'March 31, 2025',
          time: '18:00 KSA',
        },
      ],
    },
    { id: 2, title: "King's Cup", image: require('../../assets/figma/kings-cup.png'), matches: [] },
    {
      id: 3,
      title: 'AFC Champions League Elite',
      image: require('../../assets/figma/afc.png'),
      matches: [],
    },
    {
      id: 4,
      title: 'Saudi Super Cup',
      image: require('../../assets/figma/super-cup.png'),
      matches: [],
    },
  ];

  return (
    <LinearGradient colors={['#FAFFFE', '#FAFFFE']} className="flex-1 p-4">
      {/* Search Bar */}
      <View className="flex-row items-center rounded-full bg-gray-100 p-4 shadow-md">
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput placeholder="Search destination" className="ml-2 flex-1 text-gray-500" />
      </View>

      {/* Banner */}
      <View className="my-4 overflow-hidden rounded-xl shadow-lg">
        <Image source={require('../../assets/figma/stadium.png')} className="h-40 w-full" />
        <View className="absolute inset-0 bg-opacity-30 p-4">
          <Text className="self-start rounded-lg bg-gray-800 px-2 py-1 text-sm text-white opacity-50">
            Fast, secure, and effortless
          </Text>
          <Text className="mt-2 text-lg font-bold text-white">
            All your favorite matches in one place book with ease!
          </Text>
        </View>
      </View>

      {/* Categories Grid */}
      <ScrollView>
        <View className="flex-row flex-wrap justify-between">
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="my-2 w-[48%] rounded-xl bg-white p-4 shadow-md"
              onPress={() => {
                // Navigate to matches screen with the category ID as a param
                router.push({
                  pathname: '/(matches)',
                  params: { categoryId: item.id },
                });
              }}>
              <Image source={item.image} className="mx-auto h-16 w-16" />
              <Text className="mt-2 text-center font-semibold">{item.title}</Text>
              <Text className="text-center text-xs text-gray-500">All ticket</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Show All Button */}
      <TouchableOpacity className="mt-6 rounded-full bg-blue-600 p-4 shadow-md">
        <Text className="text-center font-bold text-white">Show All</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
