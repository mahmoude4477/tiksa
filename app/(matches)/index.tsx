import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MatchesScreen() {
  // Get the category ID from the route params
  const { categoryId } = useLocalSearchParams();
  const parsedCategoryId =
    typeof categoryId === 'string'
      ? parseInt(categoryId, 10)
      : Array.isArray(categoryId)
        ? parseInt(categoryId[0], 10)
        : 0;

  // This would typically come from an API or a data store
  // For now, we'll hard-code the categories data here
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
  const router = useRouter();

  // Find the selected category
  const selectedCategory = categories.find((category) => category.id === parsedCategoryId);

  if (!selectedCategory) {
    return (
      <View className="flex-1 bg-white p-4">
        <Text>No category found with ID: {categoryId}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="mb-4 text-2xl font-bold">{selectedCategory.title}</Text>

      {selectedCategory.matches && selectedCategory.matches.length > 0 ? (
        <ScrollView>
          {selectedCategory.matches.map((match) => (
            <TouchableOpacity
              key={match.id}
              className="mb-4 rounded-lg border border-gray-200 p-4"
              onPress={() =>
                router.push({
                  pathname: `/(matches)/[id]`,
                  params: { id: match.id },
                })
              }>
              <View className="flex-row items-center justify-between">
                <View className="items-center">
                  <Image source={match.team1.logo} className="h-12 w-12" />
                  <Text className="mt-2 font-semibold">{match.team1.name}</Text>
                </View>

                <Text className="font-bold">VS</Text>

                <View className="items-center">
                  <Image source={match.team2.logo} className="h-12 w-12" />
                  <Text className="mt-2 font-semibold">{match.team2.name}</Text>
                </View>
              </View>

              <View className="mt-4 items-center">
                <Text className="text-gray-600">{match.date}</Text>
                <Text className="font-semibold">{match.time}</Text>
                {/* <Text className="text-gray-500">{match.stadium}</Text> */}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text>No matches available for this category</Text>
      )}
    </View>
  );
}
