import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

// Define valid block IDs
type BlockId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'VIP';

export default function MatchDetailsScreen() {
  const { id } = useLocalSearchParams();
  console.log(id);

  const router = useRouter();

  const [selectedBlock, setSelectedBlock] = useState<BlockId | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const match = {
    id: 'match1',
    team1: { name: 'Al-Nassr', logo: require('../../assets/figma/rsl.png') },
    team2: { name: 'Al-Hilal', logo: require('../../assets/figma/rsl.png') },
    date: 'March 30, 2025',
    time: '20:30 KSA',
    stadium: 'King Fahd Stadium',
    blocks: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'VIP'],
  };

  return (
    <ScrollView className="flex-1 bg-white p-4 pb-52">
      <Text className="text-center text-2xl font-bold">
        {match.team1.name} VS {match.team2.name}
      </Text>
      <Text className="mt-2 text-center text-base text-gray-600">
        {match.date} • {match.time} • {match.stadium}
      </Text>

      {/* Stadium Image */}
      <View className="my-6">
        <Text className="mb-2 text-lg font-bold">Stadium View:</Text>
        <View className="relative aspect-[1.3] w-full">
          <ImageBackground
            source={require('../../assets/figma/ss.jpg')}
            className="relative flex-1"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Select Block */}
      <View className="mt-6">
        <Text className="text-lg font-bold">Select a Block:</Text>
        <View className="mt-2 flex-row flex-wrap">
          {match.blocks.map((block) => (
            <TouchableOpacity
              key={block}
              className={`m-1 rounded-lg px-4 py-2 ${
                selectedBlock === block ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onPress={() => {
                setSelectedBlock(block as BlockId);
                setSelectedSeat(null);
              }}>
              <Text className="font-bold text-white">{block}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Select Seat (Only shown if a block is selected) */}
      {selectedBlock && (
        <View className="mt-6">
          <Text className="mb-2 text-lg font-bold">Select a Seat in Block {selectedBlock}:</Text>
          <View className="flex-row flex-wrap">
            {[...Array(60).keys()].map((num) => {
              const seatNumber = `${selectedBlock}${num + 1}`; // A1, A2, ..., A60
              return (
                <TouchableOpacity
                  key={seatNumber}
                  className={`m-1 h-10 w-10 items-center justify-center rounded-full ${
                    selectedSeat === seatNumber ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onPress={() => setSelectedSeat(seatNumber)}>
                  <Text className="font-bold text-white">{num + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}

      {/* Book Button */}
      {selectedBlock && selectedSeat && (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/(matches)/PaymentScreen',
              params: { matchId: match.id, seat: selectedSeat, block: selectedBlock },
            })
          }
          className="mb-10 mt-6 w-4/5 self-center rounded-full bg-green-600 p-4 shadow-md">
          <Text className="text-center font-bold text-white">
            Book Ticket (Seat {selectedSeat} in Block {selectedBlock})
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
