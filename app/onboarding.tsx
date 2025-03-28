import { useFonts, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import TLogo from '../assets/figma/t-logo';

// Sample stadiums - in a real app, you'd have multiple images or use a proper slider
const SCREENS = [
  {
    id: 1,
    title: 'Feel the stadium roar!',
    subtitle: 'Be part of the action secure your ticket today!',
    image: require('../assets/images/image.png'),
  },
  {
    id: 2,
    title: 'Secure your seat like never before!',
    subtitle: 'Only you can access your ticket',
    image: require('../assets/images/image2.png'),
  },
  {
    id: 3,
    title: 'Live matches in your pocket',
    subtitle: 'Follow your favorite teams and never miss a game',
    image: require('../assets/images/image.png'),
  },
  {
    id: 4,
    title: 'Connect with fans',
    subtitle: 'Join the community and share your passion for football',
    image: require('../assets/images/image.png'),
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
  });

  const handleNext = () => {
    if (currentIndex < SCREENS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace('/login');
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const currentScreen = SCREENS[currentIndex];

  return (
    <>
      <StatusBar style="light" />
      <View className="flex h-full w-full flex-col">
        <Image source={currentScreen.image} className="h-[800px] w-full" />
        <View className="absolute bottom-0 ">
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <TLogo />
            </View>

            <View style={styles.textContainer}>
              <Text className="text-xl font-bold text-[#155157]">{currentScreen.title}</Text>
              <Text className="text-lg font-bold text-[#155157]">{currentScreen.subtitle}</Text>
            </View>

            <View style={styles.indicatorContainer}>
              {SCREENS.map((screen, index) => (
                <View
                  key={screen.id}
                  style={[styles.indicator, index === currentIndex && styles.activeIndicator]}
                />
              ))}
            </View>

            <TouchableOpacity className="rounded-2xl bg-blue-400 p-6" onPress={handleNext}>
              <Text className="text-center text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  logoContainer: {
    marginBottom: 10,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: 8,
  },
  activeIndicator: {
    backgroundColor: '#00A3FF',
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: 8,
    
  },
  button: {
    backgroundColor: '#00A3FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  loadingText: {
    fontSize: 24,
    color: 'white',
  },
});
