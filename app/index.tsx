import { router } from 'expo-router';
import { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  useEffect(() => {
    // Auto-navigate to onboarding after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={require('../assets/image.png')} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '80%',
  },
});
