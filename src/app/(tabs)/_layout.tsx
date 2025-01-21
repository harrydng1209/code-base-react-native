import { HapticTab } from '@/components/modules/HapticTab';
import { IconSymbol } from '@/components/shared/IconSymbol';
import TabBarBackground from '@/components/shared/TabBarBackground';
import { Colors } from '@/constants/colors.const';
import { useColorScheme } from '@/hooks/shared/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarBackground: TabBarBackground,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          default: {},
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol color={color} name="house.fill" size={28} />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol color={color} name="paperplane.fill" size={28} />
          ),
          title: 'Explore',
        }}
      />
    </Tabs>
  );
}
