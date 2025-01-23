import { HapticTab } from '@/components/modules/sample/HapticTab';
import { IconSymbol } from '@/components/modules/sample/ui/IconSymbol';
import TabBarBackground from '@/components/modules/sample/ui/TabBarBackground';
import constants from '@/constants';
import { useColorScheme } from '@/hooks/shared/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

const { themeColors } = constants;

export default function TabLayout() {
  const theme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors[theme].TINT,
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
