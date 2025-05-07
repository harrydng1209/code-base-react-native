import IconHomeTab from '@/assets/icons/shared/IconHomeTab.svg';
import IconProfileTab from '@/assets/icons/shared/IconProfileTab.svg';
import { COLORS } from '@/assets/styles/root/_variables.style';
import { BaseText } from '@/components/shared/BaseText';
import { useThemeColor } from '@/hooks/shared/use-theme-color';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

const TabsLayout: React.FC = () => {
  const { getThemeColor } = useThemeColor();

  const getTabBarIconColor = (focused: boolean) => {
    return focused ? COLORS.BRANCH_2 : COLORS.TEXT_3;
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: getThemeColor('TINT'),
        tabBarStyle: Platform.select({
          default: {
            borderTopWidth: 0,
          },
          ios: {
            borderTopWidth: 0,
            elevation: 0,
            position: 'absolute',
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home-tab"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconHomeTab color={getTabBarIconColor(focused)} />
          ),
          tabBarLabel: ({ focused }) => (
            <BaseText
              style={[styles.title, { color: getTabBarIconColor(focused) }]}
            >
              Home
            </BaseText>
          ),
        }}
      />

      <Tabs.Screen
        name="profile-tab"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconProfileTab color={getTabBarIconColor(focused)} />
          ),
          tabBarLabel: ({ focused }) => (
            <BaseText
              style={[styles.title, { color: getTabBarIconColor(focused) }]}
            >
              Profile
            </BaseText>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 600,
  },
});

export default TabsLayout;
