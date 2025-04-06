import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';

import { HomeIcon } from '~/components/icons/HomeIcon';
import { SearchIcon } from '~/components/icons/SearchIcon';
import { TicketIcon } from '~/components/icons/TicketIcon';
import { ProfileIcon } from '~/components/icons/ProfileIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#B0B0B0', // Light gray
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          position: 'absolute',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -3 },
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        headerShown: false, // Hide top bar
      }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />

      {/* Tickets Tab */}
      <Tabs.Screen
        name="tickets"
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color }) => <TicketIcon color={color} />,
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
